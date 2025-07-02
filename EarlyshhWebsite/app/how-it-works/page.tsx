import {
  ArrowRight,
  ClipboardList,
  UserSearch,
  Settings2,
  LayoutGrid,
  BadgeCheck,
  Sparkles,
  KanbanSquare,
  MapPin,
  TrendingUp,
  Brain,
  Quote,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const processSteps = [
  {
    icon: ClipboardList,
    title: "Define Your Campaign Vision",
    description:
      "Schedule an introductory call where we deep-dive into your marketing goals, target demographics, geographic preferences, and desired outcomes. We'll align on objectives, customer segments, and success metrics, ensuring your campaign is strategically optimized from the start.",
    benefit: "Clarity from day one, tailored specifically to your brand's growth ambitions.",
    iconColor: "text-pink-400",
  },
  {
    icon: UserSearch,
    title: "Connect with Verified Instagram Advocates",
    description:
      "Our advanced matching system identifies and selects verified creators whose demographics, lifestyle, content quality, and engagement metrics perfectly align with your brand identity. You'll gain immediate access to a community of real, enthusiastic Instagram users ready to share authentic experiences.",
    benefit: "Precision targeting ensures your message resonates with the right audience—authentically.",
    iconColor: "text-purple-400",
  },
  {
    icon: Settings2,
    title: "Sit Back—We Do All the Heavy Lifting",
    description:
      "Once matched, our turnkey system manages every aspect of your campaign—from creator onboarding and partnership confirmations to content verification and compliance checks. You can confidently rely on our platform to deliver authentic stories and measurable customer engagement without operational headaches.",
    benefit: "Focus on strategic oversight while Earlyshh handles execution seamlessly.",
    iconColor: "text-blue-400",
  },
  {
    icon: LayoutGrid,
    title: "Track, Analyze & Scale Success",
    description:
      "Access our sophisticated analytics dashboard, tracking real-time campaign performance: from initial story postings and engagement metrics, to customer acquisition and redemption rates. Use these actionable insights to refine future campaigns, optimize creator selection, and maximize ongoing marketing ROI.",
    benefit: "Complete transparency and real-time visibility into your campaign’s success.",
    iconColor: "text-cyan-400",
  },
]

const keyBenefits = [
  {
    icon: BadgeCheck,
    title: "Verified & Trustworthy Creators",
    description: "Rigorously vetted Instagram users guarantee genuine engagement and brand-safe content.",
  },
  {
    icon: Sparkles,
    title: "Scalable Authenticity",
    description:
      "Hundreds of real, enthusiastic advocates organically amplify your brand through authentic storytelling.",
  },
  {
    icon: KanbanSquare,
    title: "Real-Time Campaign Management",
    description: "Instantly track content postings, engagements, and conversions through a user-friendly interface.",
  },
  {
    icon: MapPin,
    title: "Local & Hyper-Targeted Insights",
    description: "Deep demographic targeting, from neighborhood-level reach to precise community segments.",
  },
  {
    icon: TrendingUp,
    title: "Performance-Based Pricing",
    description: "Only invest in proven results—eliminate wasted budgets and maximize ROI.",
  },
  {
    icon: Brain,
    title: "Sophisticated Creator Intelligence",
    description: "Detailed performance analytics to continuously optimize creator quality and content impact.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="w-full text-white">
      {/* 1. Page Header / Hero Section */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 to-turquoise-500 py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight !leading-snug mb-6">
              Effortless Authenticity. Measurable Results.
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto">
              See how Earlyshh seamlessly turns real Instagram users into enthusiastic brand advocates, driving
              authentic content and tangible growth.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Comprehensive Four-Step Process Explanation */}
      <div className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 p-8 rounded-xl shadow-lg border border-slate-700 flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-slate-700/50 rounded-lg mr-4">
                      <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Step {index + 1}</p>
                      <h2 className="text-2xl font-bold text-slate-100">{step.title}</h2>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-4 flex-grow">{step.description}</p>
                  <div className="mt-auto pt-4 border-t border-slate-700">
                    <p className="text-sm text-slate-200 font-semibold italic">
                      <span className={`${step.iconColor}`}>Benefit:</span> {step.benefit}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 3. Strategic Benefits & Features Summary */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Earlyshh Platform Advantages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {keyBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300"
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className="w-7 h-7 text-cyan-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-slate-100">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* 4. Enhanced Social Proof */}
      <div className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <Quote className="w-8 h-8 text-pink-400 mb-4 transform -scale-x-100" />
              <p className="text-slate-200 text-lg italic mb-4">
                &quot;Earlyshh consistently generates authentic consumer buzz, significantly reducing acquisition costs
                compared to traditional influencer methods.&quot;
              </p>
              <p className="text-right text-sm text-slate-400 font-semibold">- Generalized Industry Observation</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg border border-slate-700">
              <Quote className="w-8 h-8 text-purple-400 mb-4 transform -scale-x-100" />
              <p className="text-slate-200 text-lg italic mb-4">
                &quot;Brands experience enhanced credibility and community engagement through Earlyshh’s targeted,
                genuine user advocacy.&quot;
              </p>
              <p className="text-right text-sm text-slate-400 font-semibold">- Projected Market Trend</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Final Inviting Call-to-Action */}
      <div className="py-20 md:py-28 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 !leading-tight">
            Ready to Activate Your Brand Advocates?
          </h2>
          <Button
            asChild
            size="lg"
            className="h-16 px-10 bg-white hover:bg-slate-200 text-slate-900 font-bold text-lg rounded-xl shadow-2xl hover:shadow-slate-400/50 transition-all duration-300 transform hover:scale-105 group"
          >
            <Link href="/book-demo">
              Schedule Your Strategy Call
              <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
