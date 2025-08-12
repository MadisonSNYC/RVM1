import './App.css'
import { lazy, Suspense, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'
import { IntroSequence } from './components/intro'

// Lazy load pages for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const WorkPage = lazy(() => import('./pages/WorkPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))
const ProjectDirectory = lazy(() => import('./components/ProjectDirectory'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#00D4FF] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white/60">Loading...</p>
    </div>
  </div>
)

function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <ErrorBoundary fallbackMessage="The application encountered an error. Please refresh the page to continue.">
      {/* Intro Sequence Overlay */}
      <IntroSequence onComplete={() => setIntroComplete(true)} />
      
      {/* Main App Content */}
      <div className="min-h-screen bg-black" id="main-content" tabIndex={-1}>
        <Header />
        <Suspense fallback={<div className="w-12 h-12" />}>
          <ProjectDirectory />
        </Suspense>
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
