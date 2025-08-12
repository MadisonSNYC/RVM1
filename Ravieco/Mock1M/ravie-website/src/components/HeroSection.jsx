import AnimatedBackground from './hero/AnimatedBackground'
import HeroContent from './hero/HeroContent'
import ScrollIndicator from './hero/ScrollIndicator'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a] pt-32 pb-20">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <HeroContent />
        <ScrollIndicator />
      </div>
    </section>
  )
}