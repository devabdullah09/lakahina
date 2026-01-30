import { Link } from 'react-router-dom'
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

              {/* Book Button - Right */}
              <Link
                to="/join"
                className="px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 bg-[#6b5d52] text-white rounded-full hover:bg-[#8b7d72] transition-all font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm z-10"
              >
                Book
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </section>

      {/* Hero Section - Logo and Manifesto */}
      <section className="relative min-h-screen bg-white flex items-center justify-center py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* LAKAHINA Logo */}
          <div className="mb-12 md:mb-16">
            <img
              src={logoText}
              alt="LAKAHINA"
              className="mx-auto h-auto w-auto max-w-md md:max-w-lg"
            />
          </div>

          {/* Manifesto */}
          <div className="text-[#6b5d52] text-base md:text-lg font-normal leading-relaxed space-y-2 md:space-y-3">
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
              <div className="pl-8 md:pl-12 space-y-1 md:space-y-2 mt-2 md:mt-3">
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
            Our Homes
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
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b7d72] mb-4 font-medium">
                — OUR STORY —
              </p>
            </div>
          </div>
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

      {/* Signature Experiences Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light tracking-wide">
              Signature Experiences
            </h2>
            <p className="text-[#8b7d72] text-lg max-w-3xl mx-auto font-light leading-relaxed">
              Our brand experiences reflect our unique ethos, pillars and programming, showcasing 
              the best of what our homes have to offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-20">
            {/* Experience 1 - with image */}
            <div className="relative">
              <img
                src={experiences[0]?.image || getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-06.jpg')}
                alt="Experience"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex items-center">
              <div>
                <h3 className="font-serif text-3xl md:text-4xl text-[#6b5d52] mb-6 font-light">
                  Immersive Cultural Journeys
                </h3>
                <p className="text-[#8b7d72] text-base leading-relaxed mb-8 font-light">
                  From music festivals in the desert to wellness retreats in the mountains, 
                  our experiences are designed to connect you with the essence of each destination 
                  and create lasting memories with our global community.
                </p>
                <Link
                  to="/experiences"
                  className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nobu Grand Opening Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-6">
                <div className="h-px w-16 bg-[#8b7d72] mb-6"></div>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                {experiences[1]?.label || 'NOBU GRAND OPENING, MARRAKECH'}
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                {experiences[1]?.description || 'An unforgettable evening celebrating the grand opening of Nobu Marrakech. A fusion of Japanese elegance and Moroccan hospitality set in a stunning desert landscape.'}
              </p>
              <Link
                to={`/experiences/${experiences[1]?.slug || 'nobu-marrakech'}`}
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Discover More
              </Link>
            </div>
            
            <div className="order-1 md:order-2">
              <img
                src={experiences[1]?.image || getR2Url('OUR EXPERIENCES/3. Nobu Grand Opening, Marrakech/Pictures/Selection/L1130283.jpg')}
                alt="Nobu Grand Opening"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Featured Story (Fixed) */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              {experiences[0] && (
                <Link
                  to={`/experiences/${experiences[0].slug}`}
                  className="group block"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-lg mb-6">
                    <img
                      src={experiences[0].image}
                      alt={experiences[0].title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#6b5d52] mb-3 font-medium">
                    {experiences[0].label}
                  </h3>
                  <p className="text-[#8b7d72] text-sm mb-4 font-light">
                    By La Kahina Team
                  </p>
                  <p className="text-[#6b5d52] text-base leading-relaxed font-light">
                    {experiences[0].description}
                  </p>
                </Link>
              )}
            </div>
            
            {/* Right Side - Header + Scrollable Stories */}
            <div>
              <div className="mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light tracking-wide">
                  OUR STORIES
                </h2>
                <p className="text-[#6b5d52] text-lg font-light leading-relaxed">
                  Our stories define us, inspire us and unite us. Every journey is a story worth sharing.
                </p>
              </div>
              
              <div className="space-y-16">
                {experiences.slice(1).map((experience) => (
                  <Link
                    key={experience.id}
                    to={`/experiences/${experience.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[16/10] overflow-hidden rounded-lg mb-6">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[#6b5d52] mb-3 font-medium">
                      {experience.label}
                    </h3>
                    <p className="text-[#8b7d72] text-sm mb-2 font-light">
                      By La Kahina Team
                    </p>
                    <p className="text-[#6b5d52] text-base leading-relaxed font-light">
                      {experience.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Back Section */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src={getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-02.jpg')}
                alt="Giving Back"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                GIVING BACK
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                Our La Kahina Rise is our global impact initiative focused on strengthening local 
                communities, cultures and conservation efforts.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Sustainability Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] mb-6 font-light">
                OUR SUSTAINABILITY
              </h2>
              <div className="h-px w-16 bg-[#8b7d72] mb-8"></div>
              <p className="text-[#8b7d72] text-lg leading-relaxed mb-8 font-light">
                Sustainability drives our decision-making; the materials we choose, the way we build, 
                how we operate, and the local and global causes we support. We have one planet and it 
                is our responsibility to protect it.
              </p>
              <Link
                to="/about"
                className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.2em] text-sm border-b border-[#6b5d52] pb-1 hover:pb-2 transition-all"
              >
                Learn More
              </Link>
            </div>
            
            <div className="order-1 md:order-2">
              <img
                src={getR2Url('7. La Kahina 24/Photography/PHOTO-2024-06-03-16-00-15.jpg')}
                alt="Sustainability"
                className="w-full aspect-[4/5] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

