import { Link } from 'react-router-dom'

function Footer() {
  const americasProperties = [
    { name: 'Atacama, Chile', slug: 'atacama-chile' },
    { name: 'Bacalar, Mexico', slug: 'bacalar-mexico' },
    { name: 'San Miguel de Allende, Mexico', slug: 'san-miguel-mexico' },
    { name: 'Todos Santos, Mexico', slug: 'todos-santos-mexico' },
    { name: 'Tulum, Mexico', slug: 'tulum-mexico' },
  ]

  const middleEastProperties = [
    { name: 'Caravan Hatta, Dubai', slug: 'caravan-hatta-dubai' },
    { name: 'Ras Abrouq, Qatar', slug: 'ras-abrouq-qatar' },
    { name: 'AlUla, Saudi Arabia', slug: 'alula-saudi-arabia' },
    { name: 'Caravan AlUla, Saudi Arabia', slug: 'caravan-alula' },
    { name: 'Adventure, NEOM Saudi Arabia', slug: 'leyja-adventure-neom' },
    { name: 'Oasis, NEOM Saudi Arabia', slug: 'leyja-oasis-neom' },
    { name: 'Wellness, NEOM Saudi Arabia', slug: 'leyja-wellness-neom' },
  ]

  const africaProperties = [
    { name: 'Caravan Agafay, Morocco', slug: 'caravan-agafay-morocco' },
    { name: 'Caravan Dakhla, Morocco', slug: 'caravan-dakhla-morocco' },
    { name: 'Kalahari, Namibia', slug: 'namibia-africa' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Our Homes */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Homes</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3">Americas</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {americasProperties.map((property) => (
                    <li key={property.slug}>
                      <Link
                        to={`/property/${property.slug}`}
                        className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block"
                      >
                        {property.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4 mt-8 sm:mt-10 md:mt-0">
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3">Middle East</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {middleEastProperties.map((property) => (
                    <li key={property.slug}>
                      <Link
                        to={`/property/${property.slug}`}
                        className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block"
                      >
                        {property.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4 mt-8 sm:mt-10 md:mt-0">
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3">Africa</h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {africaProperties.map((property) => (
                    <li key={property.slug}>
                      <Link
                        to={`/property/${property.slug}`}
                        className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block"
                      >
                        {property.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Our Habitas & Follow Us */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Our Habitas</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/community-impact" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Community Impact
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/mantra" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Mantra
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white text-xs sm:text-sm transition-colors block">
                  Careers
                </Link>
              </li>
            </ul>

            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-2 sm:mb-3">Follow Us</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">TikTok</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Join our family</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2.5 sm:py-2 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 text-sm sm:text-base"
              />
              <button
                type="submit"
                className="px-6 py-2.5 sm:py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-medium text-sm sm:text-base whitespace-nowrap"
              >
                Join Us
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Our Habitas. All rights reserved.</p>
          <Link to="/privacy" className="hover:text-white transition-colors mt-2 inline-block">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

