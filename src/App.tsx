import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Property from './pages/Property'
import Experiences from './pages/Experiences'
import ExperienceDetail from './pages/ExperienceDetail'
import Offers from './pages/Offers'
import Journal from './pages/Journal'
import About from './pages/About'
import Join from './pages/Join'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:slug" element={<Property />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/:slug" element={<ExperienceDetail />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

