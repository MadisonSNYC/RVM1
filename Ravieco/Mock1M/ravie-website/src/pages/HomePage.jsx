import HeroSection from '../components/HeroSection'
import ProjectsBentoGrid from '../components/ProjectsBentoGrid'
import AboutSection from '../components/AboutSection'
import ErrorBoundary from '../components/ErrorBoundary'

export default function HomePage() {
  return (
    <>
      <ErrorBoundary fallbackMessage="Failed to load the hero section. Please refresh the page.">
        <HeroSection />
      </ErrorBoundary>
      
      <ErrorBoundary fallbackMessage="Failed to load projects. Please check your connection and refresh.">
        <ProjectsBentoGrid />
      </ErrorBoundary>
      
      <ErrorBoundary fallbackMessage="Failed to load the about section. Please refresh the page.">
        <AboutSection />
      </ErrorBoundary>
    </>
  )
}