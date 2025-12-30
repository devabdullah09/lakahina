import { Link } from 'react-router-dom'
import { properties } from '../data/properties'
import { experiences } from '../data/experiences'
import { getR2Url } from '../config/r2-assets'

const landingVideo = getR2Url('7. La Kahina 24/KAHINA_16_9_1.mp4')
const logoWhite = getR2Url('logo/logo white.png')

function Home() {
  return (
    <div className="bg-white">
      {/* Full Screen Video Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={landingVideo} type="video/mp4" />
        </video>

        {/* Semi-transparent Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-30 bg-white/5 backdrop-blur-md border-b border-white/10">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 relative">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => {
                  const event = new CustomEvent('toggleMenu')
                  window.dispatchEvent(event)
                }}
                className="text-white hover:text-gray-200 transition-colors z-10"
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

              {/* Logo and Title - Centered */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-1.5 sm:space-x-2 md:space-x-3">
                <img
                  src={logoWhite}
                  alt="La Kahina Logo"
                  className="h-5 sm:h-7 md:h-9 w-auto"
                />
                <h1 className="text-sm sm:text-lg md:text-2xl font-light text-white uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
                  LA KAHINA
                </h1>
              </div>

              {/* Book Button - Right */}
              <Link
                to="/join"
                className="px-3 sm:px-5 md:px-7 py-1.5 sm:py-2 md:py-2.5 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all font-medium uppercase tracking-wider text-[10px] sm:text-xs md:text-sm z-10"
              >
                Book
              </Link>
            </div>
          </div>
        </div>

        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </section>

      {/* Hero Section - Luxury for the Soul */}
      <section className="relative min-h-screen bg-white flex items-center justify-center py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#6b5d52] mb-8 font-light tracking-wide">
            Luxury for the Soul
          </h1>
          <p className="text-[#6b5d52] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            We are a global home for a global community of like-minded people seeking connection, 
            inspiration and a better future together. Our experience is powered by music, wellness, 
            art, adventure, food, learning and giving back. Through these pillars, we craft magical 
            worlds in which strangers become friends and friends become family. This is what we call 
            luxury for the soul.
          </p>
        </div>
      </section>

      {/* Our Homes Section */}
      <section className="py-24 bg-[#f5f0eb]">
        <div className="max-w-[1600px] mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-[#6b5d52] text-center mb-20 font-light tracking-wide">
            Our Homes
          </h2>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-scroll-slow hover:pause-animation">
              {/* Duplicate properties for infinite scroll effect */}
              {[...properties, ...properties].map((property, index) => (
                <Link
                  key={`${property.id}-${index}`}
                  to={`/property/${property.slug}`}
                  className="group flex-shrink-0 w-[400px] bg-white"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-sans text-sm uppercase tracking-[0.15em] mb-3 font-medium text-[#6b5d52]">
                      {property.name} | {property.location}
                    </h3>
                    <p className="text-[#8b7d72] text-sm mb-6 font-light">
                      {property.description}
                    </p>
                    <button className="inline-block text-[#6b5d52] font-medium uppercase tracking-[0.15em] text-xs border border-[#6b5d52] px-6 py-2.5 rounded-full hover:bg-[#6b5d52] hover:text-white transition-all duration-300">
                      Discover {property.name}
                    </button>
                  </div>
                </Link>
              ))}
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
                to={`/experience/${experiences[1]?.slug || 'nobu-marrakech'}`}
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
                  to={`/experience/${experiences[0].slug}`}
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
                    to={`/experience/${experience.slug}`}
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

