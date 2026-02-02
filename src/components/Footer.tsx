import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#6b5d52] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6 uppercase tracking-wider">La Kahina</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              More than an event, La Kahina is a home in movement. A place where the land remembers you. A community rooted in Desert, carried across the world.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              La Kahina is open and inclusive. Its values are inspired by the principles of Burning Man: radical inclusion, gifting, decommodification, radical self-reliance, radical self-expression, communal effort, civic responsibility, leave no trace, and participation.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  Journal
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-gray-300 hover:text-white text-sm sm:text-base transition-colors block">
                  Join
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-base sm:text-lg font-light mb-4 sm:mb-6 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:Team@lakahina.com" 
                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base block"
              >
                Team@lakahina.com
              </a>
              <div>
                <h4 className="text-xs sm:text-sm font-medium text-gray-400 mb-3">Follow Us</h4>
                <a 
                  href="https://www.instagram.com/lakahina__?igsh=MTE5bWJzOTZna2wwZw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span className="text-sm sm:text-base">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 border-t border-[#8b7d72] text-center text-gray-300 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} La Kahina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

