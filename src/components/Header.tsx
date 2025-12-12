import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getR2Url } from '../config/r2-assets'

const logoWhite = getR2Url('logo/logo white.png')

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
      {/* Side Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[33.333%] min-w-[320px] max-w-[480px] bg-gray-700/90 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8 md:p-12">
          {/* Header with Logo and Close Button */}
          <div className="flex items-start justify-between mb-16 md:mb-20">
            {/* Logo */}
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3">
              <img
                src={logoWhite}
                alt="La Kahina Logo"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
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

          {/* Brand Name */}
          <div className="mb-12 md:mb-16">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="text-xl md:text-2xl font-light text-white uppercase tracking-[0.15em]">
                LA KAHINA
              </h1>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-5 md:space-y-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase tracking-[0.1em] text-base md:text-lg font-light hover:text-gray-300 transition-colors py-1 ml-7"
            >
              About Us
            </Link>
            <Link
              to="/experiences"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase tracking-[0.1em] text-base md:text-lg font-light hover:text-gray-300 transition-colors py-1 flex items-center group"
            >
              {(location.pathname === '/experiences' || location.pathname.startsWith('/experience/')) && (
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
              <span className={!(location.pathname === '/experiences' || location.pathname.startsWith('/experience/')) ? 'ml-7' : ''}>Our Experiences</span>
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase tracking-[0.1em] text-base md:text-lg font-light hover:text-gray-300 transition-colors py-1 ml-7"
            >
              Join Us
            </Link>
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-white uppercase tracking-[0.1em] text-base md:text-lg font-light hover:text-gray-300 transition-colors py-1 ml-7"
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

