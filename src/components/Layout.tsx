import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const heroRoutes = ['/', '/experiences']
  const isExperienceDetail = location.pathname.startsWith('/experiences/')
  const isHeroRoute = heroRoutes.includes(location.pathname) || isExperienceDetail

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-grow ${isHeroRoute ? '' : 'pt-16 sm:pt-20'}`}>{children}</main>
      {!isHeroRoute && <Footer />}
    </div>
  )
}

export default Layout

