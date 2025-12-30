import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { getR2Url } from '../config/r2-assets'

const logoDark = getR2Url('logo/logo white.png')

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Top Navigation Bar */}
      {!isHomePage && (
        <nav className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20 relative">
              {/* Hamburger Menu - Left */}
              <button
                onClick={() => {
                  const event = new CustomEvent('toggleMenu')
                  window.dispatchEvent(event)
                }}
                className="text-[#6b5d52] hover:text-[#8b7d72] transition-colors z-10"
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
              <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2 md:space-x-3">
                <img
                  src={logoDark}
                  alt="La Kahina Logo"
                  className="h-7 md:h-9 w-auto"
                />
                <h1 className="text-base sm:text-xl md:text-2xl font-light text-[#6b5d52] uppercase tracking-[0.15em] md:tracking-[0.2em] whitespace-nowrap">
                  LA KAHINA
                </h1>
              </Link>

              {/* Book Button - Right */}
              <Link
                to="/join"
                className="px-5 md:px-7 py-2 md:py-2.5 bg-[#6b5d52] text-white rounded-full hover:bg-[#8b7d72] transition-all font-medium uppercase tracking-wider text-xs md:text-sm z-10"
              >
                Book
              </Link>
            </div>
          </div>
        </nav>
      )}

      <main className={`flex-grow ${!isHomePage ? 'pt-16 sm:pt-20' : ''}`}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

