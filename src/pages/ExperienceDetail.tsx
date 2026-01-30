import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { experiences } from '../data/experiences'
import logoDark from '../assets/logo/LAKAHINA_FullLogo (black).png'

// Helper function to format content with bold markers
function formatContentWithBold(content: string) {
  const lines = content.split('\n')
  const result: JSX.Element[] = []

  lines.forEach((line, index) => {
    const trimmed = line.trim()
    if (!trimmed) {
      result.push(<br key={`br-${index}`} />)
      return
    }

    // Convert **text** to <strong>text</strong>
    const formatBold = (text: string) => {
      return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    }

    const formattedText = formatBold(trimmed)
    result.push(
      <div key={`line-${index}`} className="mb-2">
        <span dangerouslySetInnerHTML={{ __html: formattedText }} />
      </div>
    )
  })

  return <div>{result}</div>
}

// Helper function to format Event Highlights content
function formatEventHighlights(content: string) {
  const lines = content.split('\n')
  const result: JSX.Element[] = []

  // Helper to convert **text** to <strong>text</strong>
  const formatBold = (text: string) => {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  }

  lines.forEach((line, index) => {
    const trimmed = line.trim()
    if (!trimmed) {
      result.push(<br key={`br-${index}`} />)
      return
    }

    // Numbered items with bold (e.g., **1. Opening Night...**)
    if (/^\*\*\d+\./.test(trimmed)) {
      const match = trimmed.match(/^\*\*(\d+)\.\s*(.+?)\*\*$/)
      if (match) {
        const num = parseInt(match[1])
        const text = match[2]
        result.push(
          <div key={`item-${index}`} className="mb-6">
            <div className="font-courier text-xl sm:text-2xl font-normal text-[#6b5d52] tracking-wide uppercase">
              {num}. {text}
            </div>
          </div>
        )
      }
      return
    }

    // Regular numbered items (not bold)
    if (/^\d+\./.test(trimmed)) {
      const match = trimmed.match(/^(\d+)\.\s*(.+)$/)
      if (match) {
        const num = parseInt(match[1])
        const text = match[2]
        const formattedText = formatBold(text)
        result.push(
          <div key={`item-${index}`} className="mb-6">
            <div className="font-courier text-xl sm:text-2xl font-normal text-[#6b5d52] tracking-wide uppercase">
              <span dangerouslySetInnerHTML={{ __html: `${num}. ${formattedText}` }} />
            </div>
          </div>
        )
      }
      return
    }

    // Sub-heading (bold, smaller than main heading)
    if (/^\*\*[A-Z]/.test(trimmed) && !trimmed.includes('•') && !trimmed.includes('○')) {
      const formattedText = formatBold(trimmed)
      result.push(
        <div key={`subhead-${index}`} className="mb-4 mt-4">
          <div className="font-courier text-lg sm:text-xl font-normal text-[#6b5d52] tracking-wide uppercase">
            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        </div>
      )
      return
    }

    // Circular bullet (○) - for main bullet points
    if (trimmed.startsWith('○')) {
      const text = trimmed.substring(1).trim()
      const formattedText = formatBold(text)
      result.push(
        <div key={`bullet-${index}`} className="ml-4 mb-3 text-[#6b5d52]">
          <span>• </span>
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
      )
      return
    }

    // Square bullet (■) - for nested items
    if (trimmed.startsWith('■')) {
      const text = trimmed.substring(1).trim()
      const formattedText = formatBold(text)
      result.push(
        <div key={`square-${index}`} className="ml-8 mb-2 text-[#6b5d52]">
          <span>■ </span>
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
      )
      return
    }

    // Regular text - format bold markers
    const formattedText = formatBold(trimmed)
    result.push(
      <div key={`text-${index}`} className="mb-3 text-[#6b5d52]">
        <span dangerouslySetInnerHTML={{ __html: formattedText }} />
      </div>
    )
  })

  return <div className="space-y-2">{result}</div>
}

function ExperienceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const experience = experiences.find((exp) => exp.slug === slug)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsHeaderSolid(scrollPosition > 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!experience) {
    return <Navigate to="/experiences" replace />
  }

  if (experience.comingSoon) {
    return <Navigate to="/experiences" replace />
  }

  const headerBaseClasses =
    'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ease-out'
  const headerVariantClasses = isHeaderSolid
    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
    : 'bg-white/90 backdrop-blur-md border-gray-200/80 text-gray-900'

  const iconColor = 'text-gray-900'

  return (
    <div className="min-h-screen">
      {/* Header Bar */}
      <div className={`${headerBaseClasses} ${headerVariantClasses}`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
            {/* Hamburger Menu - Left */}
            <button
              onClick={() => {
                const event = new CustomEvent('toggleMenu')
                window.dispatchEvent(event)
              }}
              className={`${iconColor} hover:opacity-70 transition-colors z-10`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo - Centered (black throughout) */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
              <img
                src={logoDark}
                alt="La Kahina Logo"
                className="h-5 sm:h-7 md:h-9 w-auto"
              />
            </div>

            {/* Back Button - Right */}
            <Link
              to="/experiences"
              className={`${iconColor} hover:opacity-70 transition-colors z-10`}
              aria-label="Back to experiences"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Image - Landing Image */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl experience-content">
          {/* Heading */}
          {experience.fullDescription?.subtitle && (
            <h1 className="font-courier text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6b5d52] mb-12 sm:mb-16 md:mb-20 font-normal text-center tracking-wide max-w-4xl mx-auto">
              {experience.fullDescription.subtitle}
            </h1>
          )}

          {/* Section 1: Text Left, Image Right */}
          {experience.images && experience.images[0] && experience.fullDescription?.sections && experience.fullDescription.sections[0] && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24 max-w-6xl mx-auto">
              {/* Text Left - Takes 3/5 of the space */}
              <div className="lg:col-span-3 flex items-center lg:order-1">
                <div className="text-[#6b5d52] text-base sm:text-lg leading-loose font-light space-y-4 w-full">
                  {formatContentWithBold(experience.fullDescription.sections[0].content)}
                </div>
              </div>

              {/* Image Right - Takes 2/5 of the space */}
              <div className="lg:col-span-2 flex justify-center lg:justify-end lg:order-2">
                <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg w-full max-w-md">
                  <img
                    src={experience.images[0]}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Sections: Render all sections with images (starting from section 1) */}
          {experience.fullDescription?.sections && experience.fullDescription.sections.map((section, sectionIndex) => {
            // Skip section 0 (already rendered above)
            if (sectionIndex === 0) return null
            
            const imageIndex = sectionIndex
            const hasImage = experience.images && experience.images[imageIndex]
            
            // Check if content has numbered headings (like **2. Second Night...** or **3. Closing Day...**)
            const contentLines = section.content.split('\n').map(line => line.trim()).filter(line => line)
            const hasNumberedHeadings = contentLines.some(line => /^\*\*\d+\./.test(line))
            
            // If no image, render text only
            if (!hasImage) {
              return (
                <div key={`section-${sectionIndex}`} className="mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
                  {section.title && (
                    <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 font-normal uppercase tracking-wide text-center">
                      {section.title}
                    </h2>
                  )}
                  <div className="text-[#6b5d52] text-base sm:text-lg leading-loose font-light space-y-4 whitespace-pre-line">
                    {section.title === 'Event Highlights' || hasNumberedHeadings ? formatEventHighlights(section.content) : formatContentWithBold(section.content)}
                  </div>
                </div>
              )
            }

            // Alternating layout: section 1 (index 1) = image LEFT, section 2 (index 2) = image RIGHT, section 3 (index 3) = image LEFT
            // Since sectionIndex starts at 1, we want: 1=left, 2=right, 3=left, 4=right
            const isImageLeft = (sectionIndex - 1) % 2 === 0 // sectionIndex 1, 3, 5... have image on left
            
            return (
              <div key={`section-${sectionIndex}`} className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center mb-16 sm:mb-20 md:mb-24 max-w-6xl mx-auto">
                {/* Image */}
                <div className={`lg:col-span-2 flex justify-center items-center ${isImageLeft ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'}`}>
                  <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-lg w-full max-w-md">
                    <img
                      src={experience.images![imageIndex]}
                      alt={`${experience.title} image`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`lg:col-span-3 flex items-center ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full">
                    {section.title && (
                      <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 font-normal uppercase tracking-wide text-center lg:text-left">
                        {section.title}
                      </h2>
                    )}
                    <div className="text-[#6b5d52] text-base sm:text-lg leading-loose font-light space-y-4">
                      {section.title === 'Event Highlights' || hasNumberedHeadings ? formatEventHighlights(section.content) : formatContentWithBold(section.content)}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Video Section - At the End - Skip for La Kahina 2025 */}
          {experience.video && experience.slug !== 'la-kahina-marrakech-2025' && (
            <div className="mt-16 sm:mt-20 md:mt-24">
              <div className="relative aspect-video overflow-hidden rounded-lg bg-black shadow-2xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLVideoElement
                    const fallbacks = experience.videoFallbackUrls ?? []
                    const triedSrc = target.currentSrc || experience.video || ''
                    const triedIndex = triedSrc === experience.video ? -1 : fallbacks.indexOf(triedSrc)
                    const nextIndex = triedIndex + 1
                    if (nextIndex < fallbacks.length) {
                      const nextUrl = fallbacks[nextIndex]
                      if (import.meta.env.DEV) console.log('Trying fallback video URL:', nextUrl)
                      target.src = nextUrl
                      target.load()
                      return
                    }
                    console.error('Video failed to load:', {
                      url: experience.video,
                      error: target.error,
                      errorCode: target.error?.code,
                      errorMessage: target.error?.message,
                      networkState: target.networkState,
                      readyState: target.readyState,
                      src: target.currentSrc
                    })
                  }}
                  onLoadStart={() => {
                    if (import.meta.env.DEV) {
                      console.log('Video load started:', experience.video)
                    }
                  }}
                  onCanPlay={() => {
                    if (import.meta.env.DEV) {
                      console.log('✓ Video can play:', experience.video)
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (import.meta.env.DEV) {
                      console.log('✓ Video metadata loaded:', experience.video)
                    }
                  }}
                  onLoadedData={() => {
                    if (import.meta.env.DEV) {
                      console.log('✓ Video data loaded:', experience.video)
                    }
                  }}
                >
                  <source src={experience.video} type="video/mp4" />
                  {experience.videoFallbackUrls?.map((url, i) => (
                    <source key={i} src={url} type="video/mp4" />
                  ))}
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          )}

          {/* Gallery Section */}
          {experience.gallery && experience.gallery.length > 0 && (
            <div className="mt-16 sm:mt-20 md:mt-24">
              <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 sm:mb-12 font-normal text-center">
                Gallery
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {experience.gallery.map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                    <img
                      src={img}
                      alt={`${experience.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail
