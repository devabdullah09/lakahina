import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { experiences } from '../data/experiences'
import { getR2Url } from '../config/r2-assets'

const logoWhite = getR2Url('logo/logo white.png')
const logoDark = getR2Url('logo/logo.png')

function Experiences() {
  const heroRef = useRef<HTMLElement>(null)
  const [isHeaderSolid, setIsHeaderSolid] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const { bottom } = heroRef.current.getBoundingClientRect()
      setIsHeaderSolid(bottom <= 80)
      setScrollY(window.scrollY)
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
    : 'bg-transparent border-transparent text-white'

  const iconColor = isHeaderSolid ? 'text-gray-900' : 'text-white'

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

              {/* Spacer for right alignment */}
              <div className="w-20 md:w-24" />
            </div>
          </div>
        </div>

        {/* Hero Content - Centered */}
        <div className="relative h-full flex flex-col items-center justify-center z-20 px-4">
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 text-center transition-opacity duration-300"
            style={{ opacity: Math.max(0, 1 - scrollY / 300) }}
          >
            Our Experiences
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          {/* Description Paragraph */}
          <div className="text-center mb-20 md:mb-24">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Music, wellness, adventure, culture, food and learning are the pillars of the La Kahina
              experience, creating magical worlds where strangers become friends and friends become family.
              Get a glimpse into the diverse experiences available at our global destinations, reflecting
              our unique ethos and the beauty of each location.
            </p>
          </div>

          {/* Experiences Grid - 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {experiences.map((experience) => (
              <Link
                key={experience.id}
                to={`/experiences/${experience.slug}`}
                className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Default gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                  
                  {/* Hover overlay with description */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8 md:p-12">
                    <p className="text-white text-center text-base md:text-lg leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  {/* Label at bottom - always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center z-10">
                    <p className="text-white uppercase tracking-[0.25em] text-sm md:text-base font-light opacity-100 group-hover:opacity-70 transition-opacity duration-300">
                      {experience.label
                        ? experience.label
                        : `LA KAHINA ${experience.title.toUpperCase()}`}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Experiences

