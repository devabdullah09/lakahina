/**
 * R2 Assets Configuration
 * 
 * This module provides a function to get R2 asset URLs.
 * When VITE_USE_R2 is true, it returns R2 URLs.
 * When false, it returns R2 URLs anyway (assets should be uploaded before development).
 */

const USE_R2 = import.meta.env.VITE_USE_R2 === 'true'
const R2_PUBLIC_URL = import.meta.env.VITE_R2_PUBLIC_URL || ''
const WEBSITE_ID = import.meta.env.VITE_WEBSITE_ID || 'lakahina'

// Debug logging (remove in production)
if (import.meta.env.DEV) {
  console.log('R2 Config:', {
    USE_R2,
    R2_PUBLIC_URL: R2_PUBLIC_URL ? '✓ Set' : '✗ Missing',
    WEBSITE_ID,
    'All env vars': {
      VITE_USE_R2: import.meta.env.VITE_USE_R2,
      VITE_R2_PUBLIC_URL: import.meta.env.VITE_R2_PUBLIC_URL,
      VITE_WEBSITE_ID: import.meta.env.VITE_WEBSITE_ID,
    }
  })
}

/**
 * Get the R2 URL for an asset
 * @param assetPath - The path to the asset relative to the assets folder (e.g., 'logo/logo.png')
 * @returns The full R2 URL
 */
export function getR2Url(assetPath: string): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  
  if (!R2_PUBLIC_URL) {
    console.error('VITE_R2_PUBLIC_URL is not set in .env file!')
    return `#MISSING_R2_URL/${WEBSITE_ID}/${cleanPath}`
  }
  
  // Construct R2 URL: {R2_PUBLIC_URL}/{WEBSITE_ID}/{assetPath}
  const url = `${R2_PUBLIC_URL}/${WEBSITE_ID}/${cleanPath}`
  
  // Debug first few URLs
  if (import.meta.env.DEV && Math.random() < 0.1) {
    console.log('R2 URL generated:', url)
  }
  
  return url
}

