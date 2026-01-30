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
 * @param skipWebsiteIdPrefix - If true, skip adding WEBSITE_ID prefix (for full paths)
 * @param useProxyInDev - If true, in dev return a same-origin proxy URL to avoid CORS (when bucket has no CORS policy)
 * @returns The full R2 URL (or proxy URL in dev when useProxyInDev is true)
 */
export function getR2Url(
  assetPath: string,
  skipWebsiteIdPrefix: boolean = false,
  useProxyInDev: boolean = false
): string {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath
  const pathSegments = cleanPath.split('/').map(segment => encodeURIComponent(segment))
  const encodedPath = pathSegments.join('/')
  const pathOnly = skipWebsiteIdPrefix ? encodedPath : `${WEBSITE_ID}/${encodedPath}`

  // In dev, use same-origin proxy to avoid CORS when R2 bucket has no CORS policy
  if (import.meta.env.DEV && useProxyInDev) {
    const proxyUrl = `/r2-proxy/${pathOnly}`
    if (assetPath.includes('.mp4') || assetPath.includes('.mov') || assetPath.includes('.webm')) {
      console.log('Video using dev proxy (avoids CORS):', proxyUrl)
    }
    return proxyUrl
  }

  if (!R2_PUBLIC_URL) {
    console.error('VITE_R2_PUBLIC_URL is not set in .env file!')
    return `#MISSING_R2_URL/${pathOnly}`
  }

  const url = skipWebsiteIdPrefix
    ? `${R2_PUBLIC_URL}/${encodedPath}`
    : `${R2_PUBLIC_URL}/${WEBSITE_ID}/${encodedPath}`

  if (import.meta.env.DEV && (assetPath.includes('.mp4') || assetPath.includes('.mov') || assetPath.includes('.webm'))) {
    console.log('Video R2 URL:', url)
  }

  return url
}

