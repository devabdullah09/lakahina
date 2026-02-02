import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import logoDark from '../assets/logo/LAKAHINA_FullLogo (black).png'

function Experiences() {
  const heroRef = useRef<HTMLElement>(null)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const { bottom } = heroRef.current.getBoundingClientRect()
      setIsHeaderSolid(bottom <= 80)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const heroImage =
    experiences[0]?.image ||
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop'

  const headerBaseClasses =
    'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ease-out'
  const headerVariantClasses = isHeaderSolid
    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
    : 'bg-white/90 backdrop-blur-md border-gray-200/80 text-gray-900'

  const iconColor = 'text-gray-900'

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        ref={heroRef}
        className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Experiences"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

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

              {/* Spacer for right alignment */}
              <div className="w-16 sm:w-20 md:w-24" />
            </div>
          </div>
        </div>

      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px]">
          {/* Description Paragraph */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#6b5d52] mb-6 sm:mb-8 font-serif">
              La kahina
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-4 space-y-4">
              <p>
                La Kahina is a cultural gathering rooted in Moroccan heritage and Burning Man principles.
              </p>
              <p>
                It brings together art, music, ritual, and community to create intimate, transformative experiences between desert, city, and soul — where ancient traditions meet contemporary expression.
              </p>
            </div>
          </div>

          {/* Experiences Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
            {experiences.map((experience) => {
              // Debug logging
              if (import.meta.env.DEV) {
                console.log(`Experience: ${experience.title}, Image URL: ${experience.image}`)
              }

              const isComingSoon = experience.comingSoon === true
              const cardContent = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        console.error('Failed to load image:', {
                          url: experience.image,
                          experience: experience.title
                        })
                        target.style.opacity = '0'
                      }}
                      onLoad={() => {
                        if (import.meta.env.DEV) {
                          console.log('✓ Successfully loaded image for:', experience.title, 'URL:', experience.image)
                        }
                      }}
                    />
                    {/* Label at bottom - simple overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-center z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <p className="text-white uppercase tracking-[0.2em] sm:tracking-[0.25em] text-xs sm:text-sm md:text-base font-light drop-shadow-lg">
                        {experience.label
                          ? experience.label
                          : `LA KAHINA ${experience.title.toUpperCase()}`}
                      </p>
                      {isComingSoon && (
                        <p className="text-white/90 text-xs sm:text-sm mt-1 tracking-widest">
                          Coming soon
                        </p>
                      )}
                    </div>
                  </div>
                </>
              )

              if (isComingSoon) {
                return (
                  <div
                    key={experience.id}
                    className="relative overflow-hidden rounded-lg shadow-md cursor-not-allowed opacity-90"
                    aria-disabled="true"
                    title="Coming soon"
                  >
                    {cardContent}
                  </div>
                )
              }

              return (
                <Link
                  key={experience.id}
                  to={`/experiences/${experience.slug}`}
                  className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                >
                  {cardContent}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiences

