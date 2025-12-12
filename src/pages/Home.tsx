import { Link } from 'react-router-dom'
// import { properties } from '../data/properties'
// import { experiences } from '../data/experiences'
// import { stories } from '../data/stories'
import { getR2Url } from '../config/r2-assets'

const landingVideo = getR2Url('7. La Kahina 24/KAHINA_16_9_1.mp4')
const logoWhite = getR2Url('logo/logo white.png')

function Home() {
  return (
    <div>
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
          <div className="w-full px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20 relative">
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
                  src={logoWhite}
                  alt="La Kahina Logo"
                  className="h-7 md:h-9 w-auto"
                />
                <h1 className="text-lg md:text-2xl font-light text-white uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
                  LA KAHINA
                </h1>
              </div>

              {/* Join Us Button - Right */}
              <Link
                to="/join"
                className="px-5 md:px-7 py-2 md:py-2.5 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all font-medium uppercase tracking-wider text-xs md:text-sm z-10"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div> */}
      </section>

      {/* Our Homes Section */}
      {/* <section className="py-20 bg-white pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-light mb-12 text-center text-gray-900">Our Homes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.slug}`}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {property.comingSoon && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-900">
                      Coming Soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium text-gray-900 mb-1">
                    {property.name} | {property.location}
                  </h3>
                  <p className="text-gray-600 text-sm">{property.description}</p>
                  <span className="inline-block mt-2 text-gray-900 font-medium text-sm group-hover:underline">
                    Discover {property.name} →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* Signature Experiences Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-light mb-4 text-center text-gray-900">
            Signature Experiences
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our brand experiences reflect our unique ethos, pillars and programming, showcasing the
            best of what our homes have to offer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <div key={experience.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Stories Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-light mb-4 text-center text-gray-900">Our Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our stories define us, inspire us and unite us. Every journey is a story worth sharing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                key={story.id}
                to="/journal"
                className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:underline">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{story.description}</p>
                  <p className="text-gray-500 text-xs">{story.author}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/journal"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors font-medium"
            >
              Read Our Journals
            </Link>
          </div>
        </div>
      </section> */}

      {/* Giving Back & Sustainability Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4 text-gray-900">Giving Back</h3>
              <p className="text-gray-600 mb-6">
                Our Habitas Rise is our global impact initiative focused on strengthening local
                communities, cultures and conservation efforts.
              </p>
              <Link
                to="/community-impact"
                className="inline-block text-gray-900 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-light mb-4 text-gray-900">Our Sustainability</h3>
              <p className="text-gray-600 mb-6">
                Sustainability drives our decision-making; the materials we choose, the way we build,
                how we operate, and the local and global causes we support. We have one planet and
                it is our responsibility to protect it.
              </p>
              <Link
                to="/sustainability"
                className="inline-block text-gray-900 font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home

