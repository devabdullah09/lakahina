import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { experiences } from '../data/experiences'
import logoDark from '../assets/logo/LAKAHINA_FullLogo (black).png'

// Helper function to format content with bold markers and highlight small headings
function formatContentWithBold(content: string) {
  if (!content || typeof content !== 'string') {
    return <div></div>
  }
  
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

    // Check if line starts with a label pattern (e.g., "Type of Project:", "Location:", "Dates:", "Duration:", "Artists:")
    // Pattern: Label followed by colon, then content
    const labelPattern = /^([^:]+):\s*(.+)$/
    const match = trimmed.match(labelPattern)
    
    // Common labels that should be highlighted
    const highlightLabels = [
      'Type of Project',
      'Location',
      'Dates',
      'Duration',
      'Artists',
      'Concept',
      'Featured Artists',
    ]
    
    if (match) {
      const label = match[1].trim()
      const value = match[2].trim()
      const shouldHighlight = highlightLabels.some(hl => label.toLowerCase().includes(hl.toLowerCase()))
      
      if (shouldHighlight && value) {
        const formattedValue = formatBold(value)
        result.push(
          <div key={`line-${index}`} className="mb-2">
            <span className="font-semibold">{label}:</span>{' '}
            <span dangerouslySetInnerHTML={{ __html: formattedValue }} />
          </div>
        )
      } else {
        // Regular line with colon but not a label we want to highlight
        const formattedText = formatBold(trimmed)
        result.push(
          <div key={`line-${index}`} className="mb-2">
            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        )
      }
    } else {
      // Check for "Where the Dust Meets Culture" as a special heading
      if (trimmed.toLowerCase().includes('where the dust meets culture')) {
        const formattedText = formatBold(trimmed)
        result.push(
          <div key={`line-${index}`} className="mb-4 mt-4">
            <div className="font-semibold" dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        )
      } else {
        const formattedText = formatBold(trimmed)
        result.push(
          <div key={`line-${index}`} className="mb-2">
            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        )
      }
    }
  })

  return <div>{result}</div>
}

// Component for sections with images that match exact height
function SectionWithImage({
  section,
  images,
  experienceTitle,
  isImageLeft,
  formatContent,
  formatEventHighlights,
}: {
  section: { title?: string; content: string }
  images: string[]
  experienceTitle: string
  isImageLeft: boolean
  formatContent: (content: string) => JSX.Element
  formatEventHighlights: (content: string) => JSX.Element
}) {
  const textRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        const textHeight = textRef.current.offsetHeight
        setImageHeight(textHeight)
      }
    }

    // Initial measurement
    updateHeight()
    
    // Re-measure after a short delay to ensure content is fully rendered
    const timeout1 = setTimeout(updateHeight, 100)
    const timeout2 = setTimeout(updateHeight, 500)
    
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [section.content, section.title])

  // Check if content has numbered headings
  const contentLines = section.content.split('\n').map(line => line.trim()).filter(line => line)
  const hasNumberedHeadings = contentLines.some(line => /^\*\*\d+\./.test(line))
  const useEventHighlights = section.title === 'Event Highlights' || hasNumberedHeadings

  // Use all provided images (they're already configured per section)
  const imagesToShow = images && Array.isArray(images) && images.length > 0 ? images.filter(Boolean) : []

  return (
    <div className={`grid grid-cols-1 ${imagesToShow.length > 0 ? 'lg:grid-cols-5' : ''} gap-8 sm:gap-12 md:gap-16 items-start mb-16 sm:mb-20 md:mb-24 max-w-6xl mx-auto`}>
      {/* Image Column - Only render if images exist */}
      {imagesToShow.length > 0 && (
        <div
          ref={imageContainerRef}
          className={`lg:col-span-2 flex flex-col justify-start ${isImageLeft ? 'lg:order-1' : 'lg:order-2'}`}
          style={imageHeight ? { height: `${imageHeight}px` } : undefined}
        >
          <div className="w-full h-full flex flex-col gap-0">
            {imagesToShow.map((img, imgIdx) => (
              <div
                key={imgIdx}
                className={imagesToShow.length > 1 ? 'flex-1' : 'h-full'}
                style={imagesToShow.length > 1 ? undefined : { height: '100%' }}
              >
                <div className="w-full h-full overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={img}
                    alt={`${experienceTitle} image ${imgIdx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Text Column - Heading is at the top, aligned with image */}
      <div ref={textRef} className={`${imagesToShow.length > 0 ? 'lg:col-span-3' : ''} ${isImageLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col`}>
        {section.title && (
          <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 font-normal uppercase tracking-wide text-left">
            {section.title}
          </h2>
        )}
        <div className="text-[#6b5d52] text-base sm:text-lg leading-loose font-light space-y-4 flex-1">
          {useEventHighlights ? formatEventHighlights(section.content) : formatContent(section.content)}
        </div>
      </div>
    </div>
  )
}

// Helper function to format Event Highlights content with formal styling
function formatEventHighlights(content: string) {
  const lines = content.split('\n')
  const result: JSX.Element[] = []

  // Helper to convert **text** to <strong>text</strong>
  const formatBold = (text: string) => {
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  }

  let currentSection: JSX.Element[] = []
  let currentSectionNumber = 0

  lines.forEach((line, index) => {
    const trimmed = line.trim()
    if (!trimmed) {
      if (currentSection.length > 0) {
        result.push(
          <div key={`section-${currentSectionNumber}`} className="mb-8 last:mb-0">
            {currentSection}
          </div>
        )
        currentSection = []
      }
      return
    }

    // Numbered items with bold (e.g., **1. Opening Night...**) - remove number, keep text
    if (/^\*\*\d+\./.test(trimmed)) {
      // Save previous section if exists
      if (currentSection.length > 0) {
        result.push(
          <div key={`section-${currentSectionNumber}`} className="mb-8 last:mb-0">
            {currentSection}
          </div>
        )
        currentSection = []
      }
      const match = trimmed.match(/^\*\*(\d+)\.\s*(.+?)\*\*$/)
      if (match) {
        const num = parseInt(match[1])
        currentSectionNumber = num
        const text = match[2]
        currentSection.push(
          <div key={`heading-${index}`} className="mb-4">
            <h3 className="font-courier text-lg sm:text-xl font-normal text-[#6b5d52] tracking-wide uppercase">
              {text}
            </h3>
          </div>
        )
      }
      return
    }

    // Regular numbered items (not bold) - remove number, keep text
    if (/^\d+\./.test(trimmed)) {
      // Save previous section if exists
      if (currentSection.length > 0) {
        result.push(
          <div key={`section-${currentSectionNumber}`} className="mb-8 last:mb-0">
            {currentSection}
          </div>
        )
        currentSection = []
      }
      const match = trimmed.match(/^(\d+)\.\s*(.+)$/)
      if (match) {
        const num = parseInt(match[1])
        currentSectionNumber = num
        const text = match[2]
        const formattedText = formatBold(text)
        currentSection.push(
          <div key={`heading-${index}`} className="mb-4">
            <h3 className="font-courier text-lg sm:text-xl font-normal text-[#6b5d52] tracking-wide uppercase">
              <span dangerouslySetInnerHTML={{ __html: formattedText }} />
            </h3>
          </div>
        )
      }
      return
    }

    // Sub-heading (bold, smaller than main heading) - treat as regular text with emphasis
    if (/^\*\*[A-Z]/.test(trimmed) && !trimmed.includes('•') && !trimmed.includes('○') && !trimmed.includes('■')) {
      const formattedText = formatBold(trimmed)
      currentSection.push(
        <div key={`subhead-${index}`} className="mb-3 mt-2">
          <div className="font-semibold text-[#6b5d52]">
            <span dangerouslySetInnerHTML={{ __html: formattedText }} />
          </div>
        </div>
      )
      return
    }

    // Circular bullet (○) - convert to clean paragraph with no bullet
    if (trimmed.startsWith('○')) {
      const text = trimmed.substring(1).trim()
      const formattedText = formatBold(text)
      currentSection.push(
        <div key={`bullet-${index}`} className="mb-3 text-[#6b5d52] leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
      )
      return
    }

    // Square bullet (■) - convert to indented paragraph
    if (trimmed.startsWith('■')) {
      const text = trimmed.substring(1).trim()
      const formattedText = formatBold(text)
      currentSection.push(
        <div key={`square-${index}`} className="ml-6 mb-2 text-[#6b5d52] leading-relaxed">
          <span dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
      )
      return
    }

    // Regular text - format bold markers
    const formattedText = formatBold(trimmed)
    currentSection.push(
      <div key={`text-${index}`} className="mb-3 text-[#6b5d52] leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: formattedText }} />
      </div>
    )
  })

  // Add last section if exists
  if (currentSection.length > 0) {
    result.push(
      <div key={`section-${currentSectionNumber}`} className="mb-8 last:mb-0">
        {currentSection}
      </div>
    )
  }

  return <div className="space-y-0">{result}</div>
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
          {/* Debug: Ensure content renders */}
          {!experience.fullDescription && (
            <div className="text-red-500">Error: No fullDescription found for {experience.title}</div>
          )}

          {/* Section 0: Text Left, Image Right - Subtitle is now part of this section */}
          {experience.fullDescription?.sections && experience.fullDescription.sections[0] && (
            experience.images && experience.images[0] ? (
              <SectionWithImage
                section={{
                  ...experience.fullDescription.sections[0],
                  // Use subtitle as the section title if section doesn't have a title
                  title: experience.fullDescription.sections[0].title || experience.fullDescription.subtitle || undefined
                }}
                images={[experience.images[0]]}
                experienceTitle={experience.title}
                isImageLeft={false}
                formatContent={formatContentWithBold}
                formatEventHighlights={formatEventHighlights}
              />
            ) : (
              <div className="mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
                {(experience.fullDescription.sections[0].title || experience.fullDescription.subtitle) && (
                  <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 font-normal uppercase tracking-wide text-left">
                    {experience.fullDescription.sections[0].title || experience.fullDescription.subtitle}
                  </h2>
                )}
                <div className="text-[#6b5d52] text-base sm:text-lg leading-loose font-light space-y-4">
                  {formatContentWithBold(experience.fullDescription.sections[0].content)}
                </div>
              </div>
            )
          )}

          {/* Dynamic Sections: Render all sections with images (starting from section 1) */}
          {experience.fullDescription?.sections && (() => {
            // Track which image index we're at (section 0 uses images[0], so start at 1)
            let currentImageIndex = 1
            
            return experience.fullDescription.sections.map((section, sectionIndex) => {
              // Skip section 0 (already rendered above)
              if (sectionIndex === 0) return null
              
              // Determine which images belong to this section
              // Images are mapped sequentially, accounting for sections that use multiple images
              // Special cases: 
              // - Experience House section 1 uses images[1] and images[2] (2 images stacked)
              // - Event Highlights sections use 2 images stacked
              let sectionImages: string[] = []
              if (experience.images) {
                if (experience.slug === 'experience-house-marrakech-2023' && sectionIndex === 1) {
                  // Experience House section 1 uses 2 images stacked
                  sectionImages = experience.images.slice(1, 3).filter(Boolean)
                  currentImageIndex = 3 // Next section starts at index 3
                } else if (section.title === 'Event Highlights' || section.title === 'EVENT HIGHLIGHTS') {
                  // Event Highlights sections use 2 images stacked
                  // Exception: La Kahina 2025 Event Highlights section uses only 1 image
                  if (experience.slug === 'la-kahina-marrakech-2025') {
                    // La Kahina 2025 Event Highlights uses only the first image
                    if (experience.images[currentImageIndex]) {
                      sectionImages = [experience.images[currentImageIndex]]
                      currentImageIndex += 1
                    }
                  } else if (experience.images[currentImageIndex] && experience.images[currentImageIndex + 1]) {
                    sectionImages = [experience.images[currentImageIndex], experience.images[currentImageIndex + 1]].filter(Boolean)
                    currentImageIndex += 2 // Consumed 2 images, move to next available
                  } else if (experience.images[currentImageIndex]) {
                    sectionImages = [experience.images[currentImageIndex]]
                    currentImageIndex += 1
                  }
                } else {
                  // Default: one image per section, mapped sequentially
                  if (experience.images[currentImageIndex]) {
                    sectionImages = [experience.images[currentImageIndex]]
                    currentImageIndex += 1
                  }
                }
              }
            
            const hasImage = sectionImages.length > 0
            
            // Check if content has numbered headings
            const contentLines = section.content.split('\n').map(line => line.trim()).filter(line => line)
            const hasNumberedHeadings = contentLines.some(line => /^\*\*\d+\./.test(line))
            
            // If no image, render text only
            if (!hasImage) {
              return (
                <div key={`section-${sectionIndex}`} className="mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
                  {section.title && (
                    <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 font-normal uppercase tracking-wide text-left">
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
              <SectionWithImage
                key={`section-${sectionIndex}`}
                section={section}
                images={sectionImages}
                experienceTitle={experience.title}
                isImageLeft={isImageLeft}
                formatContent={formatContentWithBold}
                formatEventHighlights={formatEventHighlights}
              />
            )
          })
          })()}

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

          {/* Other Experiences Section */}
          {(() => {
            const otherExperiences = experiences.filter((exp) => exp.id !== experience.id && !exp.comingSoon)
            if (otherExperiences.length === 0) return null

            return (
              <div className="mt-16 sm:mt-20 md:mt-24">
                <h2 className="section-title font-courier text-2xl sm:text-3xl md:text-4xl text-[#6b5d52] mb-8 sm:mb-12 font-normal text-center">
                  Other Experiences
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                  {otherExperiences.map((otherExp) => (
                    <Link
                      key={otherExp.id}
                      to={`/experiences/${otherExp.slug}`}
                      className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                        <img
                          src={otherExp.image}
                          alt={otherExp.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* Label overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                          <p className="text-white uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm md:text-base font-light drop-shadow-lg">
                            {otherExp.label || `LA KAHINA ${otherExp.title.toUpperCase()}`}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail
