import { Suspense } from "react"
import dynamic from "next/dynamic"
import HeroSection from "@/components/sections/hero-section"

// Lazy load below-the-fold sections for better performance
const BenefitsSection = dynamic(() => import("@/components/sections/benefits-section"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

const FeaturesSection = dynamic(() => import("@/components/sections/features-section"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

const IndustryInsightsSection = dynamic(() => import("@/components/sections/industry-insights-section"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

const StepsSection = dynamic(() => import("@/components/sections/steps-section"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

const ResearchInsightsSection = dynamic(() => import("@/components/sections/research-insights-section"), {
  loading: () => <div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

const CTASection = dynamic(() => import("@/components/sections/cta-section"), {
  loading: () => <div className="h-64 animate-pulse bg-slate-800/30 rounded-lg mx-4" />
})

export default function LandingPage() {
  return (
    <div className="w-full text-white">
      {/* Load hero section immediately (above the fold) */}
      <HeroSection />
      
      {/* Lazy load remaining sections with Suspense boundaries */}
      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <BenefitsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <FeaturesSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <IndustryInsightsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <StepsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <ResearchInsightsSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-64 animate-pulse bg-slate-800/30 rounded-lg mx-4" />}>
        <CTASection />
      </Suspense>
    </div>
  )
}