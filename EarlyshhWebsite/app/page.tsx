import HeroSection from "@/components/sections/hero-section"
import BenefitsSection from "@/components/sections/benefits-section"
import FeaturesSection from "@/components/sections/features-section"
import IndustryInsightsSection from "@/components/sections/industry-insights-section"
import StepsSection from "@/components/sections/steps-section"
import ResearchInsightsSection from "@/components/sections/research-insights-section"
import CTASection from "@/components/sections/cta-section"

export default function LandingPage() {
  return (
    <div className="w-full text-white">
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <IndustryInsightsSection />
      <StepsSection />
      <ResearchInsightsSection />
      <CTASection />
    </div>
  )
}