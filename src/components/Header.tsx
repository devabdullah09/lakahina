import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoDark from '../assets/logo/LAKAHINA_FullLogo (black).png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Listen for menu toggle event from Home page
  useEffect(() => {
    const handleToggleMenu = () => {
      setIsMenuOpen((prev) => !prev)
    }
    window.addEventListener('toggleMenu', handleToggleMenu)
    return () => window.removeEventListener('toggleMenu', handleToggleMenu)
  }, [])

  return (
    <>
      {/* Side Navigation Menu - light bg for black logo */}
      <div
        className={`fixed top-0 left-0 h-full w-[min(100vw,400px)] sm:w-[33.333%] sm:min-w-[320px] sm:max-w-[480px] bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-5 sm:p-6 md:p-8 lg:p-12 overflow-y-auto">
          {/* Header with Logo and Close Button */}
          <div className="flex items-start justify-between mb-12 sm:mb-16 md:mb-20">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3">
              <img
                src={logoDark}
                alt="La Kahina Logo"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 hover:text-gray-600 transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7 md:w-8 md:h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>


          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7 font-display"
            >
              About Us
            </Link>
            <Link
              to="/experiences"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 flex items-center group font-display"
            >
              {(location.pathname === '/experiences' || location.pathname.startsWith('/experiences/')) && (
                <svg
                  className="w-4 h-4 mr-3 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              )}
              <span className={!(location.pathname === '/experiences' || location.pathname.startsWith('/experiences/')) ? 'ml-4 sm:ml-7' : ''}>Our Experiences</span>
            </Link>
            <Link
              to="/join"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7 font-display"
            >
              Join Us
            </Link>
            <Link
              to="/journal"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-900 uppercase tracking-[0.1em] text-sm sm:text-base md:text-lg font-light hover:text-gray-600 transition-colors py-1 ml-4 sm:ml-7 font-display"
            >
              Journal
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Header

