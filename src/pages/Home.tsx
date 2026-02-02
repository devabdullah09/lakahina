import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { experiences } from '../data/experiences'
import { getR2Url } from '../config/r2-assets'
import logoDark from '../assets/logo/LAKAHINA_FullLogo (black).png'
import logoText from '../assets/logo/text.png'

// Video path - try different path structures
// Option 1: landing/ (matching other asset patterns)
const landingVideoPath1 = 'landing/Yedder World Page d\'acceuil - Réalisée avec Clipchamp_1732283144428.mp4'
// Option 2: assets/lakahina/landing/ (as user specified)
const landingVideoPath2 = 'assets/lakahina/landing/Yedder World Page d\'acceuil - Réalisée avec Clipchamp_1732283144428.mp4'

// Try option 1 first (standard pattern), fallback to option 2; use proxy in dev to avoid CORS
const landingVideo = getR2Url(landingVideoPath1, false, true)
const landingVideoAlt = getR2Url(landingVideoPath2, true, true)

// About Us Section Component - Sahar Camp Style Layout
function AboutUsSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const [imageHeight, setImageHeight] = useState<number | null>(null)

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        const textHeight = textRef.current.offsetHeight
        setImageHeight(textHeight)
      }
    }

    updateHeight()
    const timeout1 = setTimeout(updateHeight, 100)
    const timeout2 = setTimeout(updateHeight, 500)
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Heading */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic text-[#6b5d52] leading-relaxed text-center max-w-5xl mx-auto">
            La Kahina is a community born from the dust of <strong className="font-medium not-italic">Black Rock City</strong>.
          </h2>
        </div>

        {/* 2. Text + Image - Matching Experience Detail Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-start mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
          <div ref={textRef} className="lg:col-span-3 flex flex-col space-y-4 text-[#6b5d52] leading-loose font-light text-base sm:text-lg">
            <p>
              It emerged from a vision of cross-cultural encounters, weaving together the spirit of
              the desert with the depth of Moroccan ancestral culture.
            </p>
            <p>
              In a world of digital nomadism, La Kahina invites you to be not rootless, but{' '}
              <strong className="font-medium">deeply rooted</strong> nomads—carrying home within, while the land holds you.
            </p>
          </div>
          <div 
            className="lg:col-span-2 flex flex-col justify-start w-full overflow-hidden rounded-lg shadow-lg"
            style={imageHeight ? { height: `${imageHeight}px` } : { minHeight: '200px' }}
          >
            <img
              src={getR2Url('experiences/5. La Kahina, 2025/gallery/97-DSCF8932.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 3. A Full Image */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 w-full">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg">
            <img
              src={getR2Url('experiences/4. La Kahina, 2024/gallery/PHOTO-2024-06-04-09-46-51.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4. Text */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-[#6b5d52] leading-loose font-light text-left">
            La Kahina is open and inclusive. Its values are inspired by the principles of
            Burning Man: radical inclusion, gifting, decommodification, radical self-reliance,
            radical self-expression, communal effort, civic responsibility, leave no trace, and
            participation.
          </p>
        </div>

        {/* 5. Three Images */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
          <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={getR2Url('experiences/5. La Kahina, 2025/gallery/102-DSCF8939.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={getR2Url('experiences/1. La Kahina, 2023/gallery/DSC07088.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full aspect-square overflow-hidden rounded-lg shadow-lg">
            <img
              src={getR2Url('experiences/2. Nobu Grand Opening, Marrakech/gallery/L1130283.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 6. Text */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto">
          <div className="space-y-3 text-[#6b5d52] text-sm sm:text-base md:text-lg leading-loose font-light">
            <p className="font-medium text-lg sm:text-xl md:text-2xl">More than an event, La Kahina is a home in movement.</p>
            <p>A place where the land remembers you.</p>
            <p>A community rooted in Desert, carried across the world.</p>
          </div>
        </div>

        {/* 7. A Full Image */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <img
              src={getR2Url('experiences/3. Experience House, Marrakech/gallery/XH 5 Morocco-149.jpg')}
              alt="La Kahina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// Debug logging and test URL accessibility
if (import.meta.env.DEV) {
  console.log('Landing video path (option 1):', landingVideoPath1)
  console.log('Landing video URL (option 1):', landingVideo)
  console.log('Landing video path (option 2):', landingVideoPath2)
  console.log('Landing video URL (option 2):', landingVideoAlt)
  
  // Test if URL is accessible
  fetch(landingVideo, { method: 'HEAD' })
    .then(response => {
      console.log('Video URL test (option 1):', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      })
      if (!response.ok) {
        console.warn('Option 1 failed, testing option 2...')
        return fetch(landingVideoAlt, { method: 'HEAD' })
      }
      return response
    })
    .then(response => {
      if (response) {
        console.log('Video URL test (option 2):', {
          status: response.status,
          statusText: response.statusText,
          ok: response.ok
        })
      }
    })
    .catch(error => {
      console.error('Video URL fetch test error:', error)
    })
}

function Home() {
  return (
    <div className="bg-white">
      {/* Full Screen Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          src={landingVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const video = e.target as HTMLVideoElement
            const error = video.error
            console.error('Video load error:', {
              errorCode: error?.code,
              errorMessage: error?.message,
              networkState: video.networkState,
              readyState: video.readyState,
              currentSrc: video.currentSrc,
              src: video.src,
              networkStateText: ['EMPTY', 'IDLE', 'LOADING', 'NO_SOURCE'][video.networkState],
              readyStateText: ['HAVE_NOTHING', 'HAVE_METADATA', 'HAVE_CURRENT_DATA', 'HAVE_FUTURE_DATA', 'HAVE_ENOUGH_DATA'][video.readyState]
            })
            
            // Try fallback URL if first one fails
            if (video.currentSrc === landingVideo || video.src === landingVideo) {
              console.log('Trying fallback video URL:', landingVideoAlt)
              video.src = landingVideoAlt
              video.load()
            }
          }}
          onLoadStart={() => console.log('Video load started:', landingVideo)}
          onCanPlay={() => console.log('Video can play successfully')}
          onLoadedMetadata={() => console.log('Video metadata loaded')}
          onLoadedData={() => console.log('Video data loaded')}
        >
          <source src={landingVideo} type="video/mp4" />
          <source src={landingVideoAlt} type="video/mp4" />
        </video>

        {/* Fixed Header Bar - black logo throughout */}
        <div className="fixed top-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-200/80">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => {
                  const event = new CustomEvent('toggleMenu')
                  window.dispatchEvent(event)
                }}
                className="text-gray-900 hover:text-gray-600 transition-colors z-10"
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

              {/* Logo - Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
                <img
                  src={logoDark}
                  alt="La Kahina Logo"
                  className="h-5 sm:h-7 md:h-9 w-auto"
                />
              </div>

              {/* Join Us Button - Right */}
              <Link
                to="/join"
                className="px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 bg-[#6b5d52] text-white rounded-full hover:bg-[#8b7d72] transition-all font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm z-10"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </section>

      {/* Hero Section - Logo and Manifesto */}
      <section className="relative min-h-screen bg-white flex items-center justify-center py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* LAKAHINA Logo */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <img
              src={logoText}
              alt="LAKAHINA"
              className="mx-auto h-auto w-auto max-w-[85vw] sm:max-w-md md:max-w-lg"
            />
          </div>

          {/* Manifesto */}
          <div className="text-[#6b5d52] text-sm sm:text-base md:text-lg font-normal leading-relaxed space-y-2 md:space-y-3">
            {/* First Stanza */}
            <div className="space-y-2 md:space-y-3">
              <p>We return.</p>
              <p>We remember.</p>
              <p>We are home</p>
              <p>She rose from the dust</p>
              <p>La Kahina,</p>
              <p>queen of the desert.</p>
              <p>She walked with fire.</p>
              <p>Her daughters rise,</p>
              <p>carried by the wind,</p>
              <p>Embodying her spirit.</p>
            </div>

            {/* Spacing between stanzas */}
            <div className="h-8 md:h-12"></div>

            {/* Second Stanza */}
            <div className="space-y-2 md:space-y-3">
              <p>Firekeepers,</p>
              <p>guardians of Sahar,</p>
              <p>Enlightened by the moon.</p>
              <p>Yes, We remember.</p>
              <p>Dance with the elements, she whispers:</p>
              
              {/* Indented quoted section */}
              <div className="pl-4 sm:pl-6 md:pl-12 space-y-1 md:space-y-2 mt-2 md:mt-3">
                <p>&ldquo;call the water, the dust, the fire,</p>
                <p>& the earth mother of them all&rdquo;</p>
              </div>

              <p>Remember, she said,</p>
              <p>the freedom code of the desert.</p>
              <p>We are nomads,</p>
              <p>once again.</p>
              <p>So it is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Homes Section - Experiences horizontal scroll */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] text-center mb-20 font-light tracking-wide">
            Our Experiences
          </h2>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-slow hover:pause-animation">
              {/* Duplicate experiences for infinite scroll effect */}
              {[...experiences, ...experiences].map((experience, index) =>
                experience.comingSoon ? (
                  <div
                    key={`${experience.id}-${index}`}
                    className="flex-shrink-0 w-[400px] bg-white rounded-lg overflow-hidden shadow-sm cursor-default"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-sans text-sm uppercase tracking-[0.15em] mb-3 font-medium text-[#6b5d52]">
                        {experience.label || experience.title}
                      </h3>
                      <p className="text-[#8b7d72] text-sm font-light">Coming soon</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={`${experience.id}-${index}`}
                    to={`/experiences/${experience.slug}`}
                    className="group flex-shrink-0 w-[400px] bg-white rounded-lg overflow-hidden shadow-sm"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-sans text-sm uppercase tracking-[0.15em] mb-3 font-medium text-[#6b5d52]">
                        {experience.label || experience.title}
                      </h3>
                      <p className="text-[#8b7d72] text-sm mb-6 font-light line-clamp-2">
                        {experience.description}
                      </p>
                      <span className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.15em] text-xs border border-[#6b5d52] px-6 py-2.5 rounded-full hover:bg-[#6b5d52] hover:text-white transition-all duration-300">
                        Discover {experience.title.split(',')[0].trim()}
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section - Our Story */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <video
              controls
              playsInline
              className="w-full h-full object-cover"
              poster={getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-06.jpg')}
            >
              <source src={landingVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* About Us Section - Sahar Camp Style */}
      <AboutUsSection />

    </div>
  )
}

export default Home

