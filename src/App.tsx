import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import SmoothScroll from './components/SmoothScroll'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Stack from './pages/Stack'
import SampleInvestigation from './pages/SampleInvestigation'
import HiringManagers from './pages/HiringManagers'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-white font-sans selection:bg-acid selection:text-ink">
      <SmoothScroll />

      <Nav />

      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study/:id" element={<CaseStudy />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/sample-investigation" element={<SampleInvestigation />} />
          <Route path="/for-hiring-managers" element={<HiringManagers />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
