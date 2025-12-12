import { useParams, Link, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { experiences } from '../data/experiences'
import { getR2Url } from '../config/r2-assets'

const logoWhite = getR2Url('logo/logo white.png')
const logoDark = getR2Url('logo/logo.png')

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

  const headerBaseClasses =
    'fixed top-0 left-0 right-0 z-30 border-b transition-colors duration-300 ease-out'
  const headerVariantClasses = isHeaderSolid
    ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
    : 'bg-transparent border-transparent text-white'

  const iconColor = isHeaderSolid ? 'text-gray-900' : 'text-white'

  return (
    <div className="min-h-screen">
      {/* Header Bar */}
      <div className={`${headerBaseClasses} ${headerVariantClasses}`}>
        <div className="w-full px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 relative">
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
                className="w-6 h-6 md:w-7 md:h-7"
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

            {/* Logo and Title - Centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-3">
              <img
                src={isHeaderSolid ? logoDark : logoWhite}
                alt="La Kahina Logo"
                className="h-7 md:h-9 w-auto transition-all duration-300"
              />
              <h2
                className={`text-lg md:text-2xl font-light uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap transition-colors duration-300 ${
                  isHeaderSolid ? 'text-gray-900' : 'text-white'
                }`}
              >
                LA KAHINA
              </h2>
            </div>

            {/* Back Button - Right */}
            <Link
              to="/experiences"
              className={`${iconColor} hover:opacity-70 transition-colors z-10`}
              aria-label="Back to experiences"
            >
              <svg
                className="w-6 h-6 md:w-7 md:h-7"
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

      {/* Main Video or Hero Image */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
        {experience.video ? (
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src={experience.video} type="video/mp4" />
          </video>
        ) : (
          <img src={experience.image} alt={experience.title} className="w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {/* Centered Introduction */}
          {experience.fullDescription?.introParagraph && (
            <div className="text-center mb-16 md:mb-20">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {experience.fullDescription.introParagraph}
              </p>
            </div>
          )}

          {/* Alternating Image and Text Sections */}
          {experience.images &&
            experience.fullDescription?.sections &&
            experience.images.map((img, index) => {
              const section = experience.fullDescription?.sections?.[index]
              if (!section) return null

              const isImageLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20"
                >
                  {/* Image */}
                  <div className={`${isImageLeft ? 'order-1 md:order-1' : 'order-1 md:order-2'}`}>
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={img}
                        alt={section.title || `${experience.title} image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`${isImageLeft ? 'order-2 md:order-2' : 'order-2 md:order-1'}`}>
                    {section.title && (
                      <h3 className="text-xl md:text-2xl font-light text-gray-900 mb-4 uppercase tracking-[0.15em]">
                        {section.title}
                      </h3>
                    )}
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              )
            })}

          {/* Bottom Landscape Image */}
          {experience.bottomImage && (
            <div className="mt-16">
              <img
                src={experience.bottomImage}
                alt={`${experience.title} gallery`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ExperienceDetail
