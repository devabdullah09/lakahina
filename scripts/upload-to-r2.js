import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { readdir, readFile, stat } from 'fs/promises'
import { join, relative, sep } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
import dotenv from 'dotenv'
dotenv.config()

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME,
  WEBSITE_ID,
} = process.env

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET_NAME || !WEBSITE_ID) {
  console.error('Missing required environment variables:')
  console.error('  R2_ACCOUNT_ID:', R2_ACCOUNT_ID ? '✓' : '✗')
  console.error('  R2_ACCESS_KEY_ID:', R2_ACCESS_KEY_ID ? '✓' : '✗')
  console.error('  R2_SECRET_ACCESS_KEY:', R2_SECRET_ACCESS_KEY ? '✓' : '✗')
  console.error('  R2_BUCKET_NAME:', R2_BUCKET_NAME ? '✓' : '✗')
  console.error('  WEBSITE_ID:', WEBSITE_ID ? '✓' : '✗')
  process.exit(1)
}

// Initialize S3 client for R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
})

// Assets directory
const assetsDir = join(__dirname, '..', 'src', 'assets')

// Recursively get all files in a directory
async function getAllFiles(dir, fileList = []) {
  const files = await readdir(dir)
  
  for (const file of files) {
    const filePath = join(dir, file)
    const fileStat = await stat(filePath)
    
    if (fileStat.isDirectory()) {
      await getAllFiles(filePath, fileList)
    } else {
      fileList.push(filePath)
    }
  }
  
  return fileList
}

// Upload a file to R2
async function uploadFile(filePath) {
  const relativePath = relative(assetsDir, filePath)
  const key = `${WEBSITE_ID}/${relativePath.replace(/\\/g, '/')}`
  
  const fileContent = await readFile(filePath)
  const contentType = getContentType(filePath)
  
  const command = new PutObjectCommand({
    Bucket: R2_BUCKET_NAME,
    Key: key,
    Body: fileContent,
    ContentType: contentType,
  })
  
  try {
    await s3Client.send(command)
    console.log(`✓ Uploaded: ${key}`)
    return true
  } catch (error) {
    console.error(`✗ Failed to upload ${key}:`, error.message)
    return false
  }
}

// Get content type based on file extension
function getContentType(filePath) {
  const ext = filePath.toLowerCase().split('.').pop()
  const contentTypes = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif',
    webp: 'image/webp',
    svg: 'image/svg+xml',
    mp4: 'video/mp4',
    webm: 'video/webm',
    mov: 'video/quicktime',
    pdf: 'application/pdf',
    json: 'application/json',
  }
  return contentTypes[ext] || 'application/octet-stream'
}

// Main upload function
async function uploadAssets() {
  console.log('Starting upload to Cloudflare R2...')
  console.log(`Bucket: ${R2_BUCKET_NAME}`)
  console.log(`Website ID: ${WEBSITE_ID}`)
  console.log(`Assets directory: ${assetsDir}`)
  console.log('')
  
  try {
    const files = await getAllFiles(assetsDir)
    console.log(`Found ${files.length} files to upload\n`)
    
    let successCount = 0
    let failCount = 0
    
    for (const file of files) {
      const success = await uploadFile(file)
      if (success) {
        successCount++
      } else {
        failCount++
      }
    }
    
    console.log('')
    console.log('Upload complete!')
    console.log(`✓ Successfully uploaded: ${successCount}`)
    if (failCount > 0) {
      console.log(`✗ Failed: ${failCount}`)
    }
    
    if (failCount === 0) {
      console.log('')
      console.log('All files uploaded successfully!')
      console.log('Next steps:')
      console.log('  1. Set VITE_USE_R2=true in your .env file')
      console.log('  2. Restart your dev server')
    }
  } catch (error) {
    console.error('Error during upload:', error)
    process.exit(1)
  }
}

uploadAssets()

