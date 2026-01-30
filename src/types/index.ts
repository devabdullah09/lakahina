export interface Property {
  id: string
  name: string
  location: string
  slug: string
  description: string
  image: string
  region: 'Americas' | 'Middle East' | 'Africa'
  comingSoon?: boolean
}

export interface Experience {
  id: string
  title: string
  slug: string
  description: string
  image: string
  label?: string
  location?: string
  link?: string
  comingSoon?: boolean
  video?: string
  /** Fallback video URLs to try if primary fails (e.g. alternate R2 path) */
  videoFallbackUrls?: string[]
  images?: string[]
  bottomImage?: string
  gallery?: string[]
  fullDescription?: {
    subtitle?: string
    introParagraph?: string
    sections?: Array<{
      title?: string
      content: string
    }>
    type?: string
    artists?: string
    location?: string
    dates?: string
    duration?: string
    manifesto?: string
    additionalInfo?: string
  }
}

export interface Story {
  id: string
  title: string
  description: string
  image: string
  author: string
  link?: string
}

