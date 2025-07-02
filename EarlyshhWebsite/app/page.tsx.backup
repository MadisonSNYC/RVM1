import {
  ArrowRight,
  Sparkles,
  Users,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  Info,
  Lightbulb,
  BarChartBig,
  Library,
  LocateFixed,
  MessageSquareText,
  LayoutDashboard,
  Brain,
  Settings2,
  Target,
  BadgeCheck,
  Leaf,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import InstagramStoryMockup from "@/components/instagram-story-mockup"
import IphoneMockupPlaceholder from "@/components/iphone-mockup-placeholder" // Import the new component
import { Button } from "@/components/ui/button"

// Updated Benefits Data
const whyChooseEarlyshhBenefits = [
  {
    icon: MessageSquareText,
    title: "Direct Local Consumer Insights",
    description: "Receive immediate, actionable feedback from actual consumers who genuinely experience your products.",
    bgColor: "from-sky-500/10 to-cyan-500/10",
    borderColor: "border-sky-400/50",
    iconColor: "text-sky-400",
  },
  {
    icon: Users,
    title: "Authentic Engagement at Scale",
    description: "Activate hundreds of real community members per campaign, organically growing brand loyalty.",
    bgColor: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-400/50",
    iconColor: "text-purple-400",
  },
  {
    icon: Leaf, // Combined DollarSign and Leaf logic
    title: "Cost-Effective and Sustainable",
    description: "Eliminate influencer markups and shipping waste with direct, in-person, local connections.",
    bgColor: "from-green-500/10 to-teal-500/10",
    borderColor: "border-green-400/50",
    iconColor: "text-green-400",
  },
  {
    icon: Settings2,
    title: "Simplified Campaign Management",
    description: "We handle outreach, logistics, and tracking—allowing you to focus on your business growth.",
    bgColor: "from-blue-500/10 to-indigo-500/10",
    borderColor: "border-blue-400/50",
    iconColor: "text-blue-400",
  },
  {
    icon: Target,
    title: "Precision Local Targeting",
    description:
      "Pinpoint and engage your brand's ideal customers within specific local communities, ensuring impactful connections that align with your unique demographic profile.",
    bgColor: "from-red-500/10 to-orange-500/10",
    borderColor: "border-red-400/50",
    iconColor: "text-red-400",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance & Verification",
    description:
      "Every participant is verified for authentic local engagement, ensuring quality interactions and brand safety.",
    bgColor: "from-yellow-500/10 to-amber-500/10",
    borderColor: "border-yellow-400/50",
    iconColor: "text-yellow-400",
  },
]

// Screen dimensions for iPhone mockup placeholders
const MOCKUP_SCREEN_WIDTH = 138 // Approx screen width inside a 150px wide mockup with 6px borders
const MOCKUP_SCREEN_HEIGHT = 288 // Approx screen height inside a 300px tall mockup with 6px borders

// Updated Future-Focused Features Data
const futureFocusedFeatures = [
  {
    icon: BarChartBig,
    title: "Advanced Analytics & Insights",
    description: "Real-time metrics, deep local consumer intelligence, precise ROI tracking.",
    iconColor: "text-sky-400",
    placeholderQuery: "real-time+analytics+dashboard+mockup",
  },
  {
    icon: Library,
    title: "Content & User-Generated Assets",
    description: "Curated local consumer-generated content and performance analytics.",
    iconColor: "text-emerald-400",
    placeholderQuery: "curated+user-generated+content+library+mockup",
  },
  {
    icon: LocateFixed,
    title: "Local Market Integration",
    description: "Actionable neighborhood-level consumer insights and retail optimization tools.",
    iconColor: "text-rose-400",
    // No placeholderQuery means no image for this one, or we can add one. Let's assume no image for now.
  },
  {
    icon: MessageSquareText,
    title: "Feedback System",
    description: "Detailed category-specific consumer feedback surveys, integrated with market research.",
    iconColor: "text-amber-400",
    placeholderQuery: "survey+feedback+dashboard+mockup",
  },
  {
    icon: LayoutDashboard,
    title: "CRM & Brand Management",
    description: "Efficient tools for campaign management, consumer relationship tracking, and strategic reporting.",
    iconColor: "text-violet-400",
    placeholderQuery: "crm+dashboard+interface+mockup", // Added a query
  },
  {
    icon: Brain,
    title: "Value-Add & Strategic Services",
    description: "Expert recommendations for local market engagement and upcoming seamless integrations.",
    iconColor: "text-fuchsia-400",
    placeholderQuery: "strategic+services+concept+mockup", // Added a query
  },
]

// Updated How Earlyshh Works Data
const howEarlyshhWorksSteps = [
  {
    icon: MessageCircle,
    title: "Strategy Alignment Call",
    description: "Clearly define brand goals, ideal local demographics, and key campaign details.",
    placeholderQuery: "calendar+scheduling+interface+mockup",
  },
  {
    icon: Users,
    title: "Local Consumer Activation",
    description: "Seamlessly connect brands directly with genuine local consumers in real-time, in person.",
    placeholderQuery: "app+user+activation+flow+mockup",
  },
  {
    icon: BarChartBig,
    title: "Real-Time Insights",
    description: "Gain immediate access to genuine feedback and actionable market data for smarter business decisions.",
    placeholderQuery: "data+insights+dashboard+charts+mockup",
  },
]

export default function LandingPage() {
  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-500 via-purple-600 via-blue-600 to-turquoise-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-20 lg:py-12">
            <div className="text-center lg:text-left space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight !leading-snug">
                Connect Directly With Real Local Consumers
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl mx-auto lg:mx-0">
                Earlyshh empowers everyday people to authentically engage with your products, delivering genuine local
                insights and sustainable brand growth—without the influencer headaches.
              </p>
              <div className="space-y-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full max-w-xs mx-auto lg:mx-0 h-14 bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-slate-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Link href="/book-demo">
                    <Sparkles className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-pulse" />
                    Set Up a Call
                  </Link>
                </Button>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6 pt-3">
                  <Link
                    href="/how-it-works"
                    className="text-sm text-slate-300 hover:text-yellow-300 transition-colors group flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-slate-300 hover:text-purple-300 transition-colors group flex items-center"
                  >
                    Explore Possibilities
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pt-8 lg:pt-0">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <InstagramStoryMockup />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Brands Choose Earlyshh (Benefits Grid Section) */}
      <div className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Brands Choose Earlyshh Over Influencers
            </h2>
            <p className="text-lg text-slate-300">
              Avoid costly influencer campaigns that don’t resonate. Earlyshh gives you direct access to local
              consumers, sustainable product exposure, and valuable market insights.
            </p>
          </div>
          <div className="max-w-md mx-auto mb-12 md:mb-16 bg-slate-800 p-4 rounded-lg shadow-lg">
            <Image
              src="/placeholder.svg?width=400&height=250"
              alt="Simplified Campaign Management Dashboard Mockup"
              width={400}
              height={250}
              className="rounded-md object-cover mx-auto"
            />
            <p className="text-xs text-slate-400 mt-2 text-center">Illustrative: Simplified Campaign Management</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {whyChooseEarlyshhBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <div
                  key={index}
                  className={`bg-slate-800/70 p-6 rounded-xl shadow-lg border ${benefit.borderColor} hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br ${benefit.bgColor} transition-all duration-300 transform hover:-translate-y-1 flex flex-col`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${benefit.bgColor} mr-3`}>
                      <IconComponent className={`w-6 h-6 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">{benefit.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Future-Focused Features Section */}
      <div className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Future-Focused Tools & Market Insights
            </h2>
            <p className="text-sm text-cyan-300 uppercase tracking-wider font-semibold">Coming Soon</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {futureFocusedFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300 flex flex-col group"
                >
                  <div className="flex items-center mb-3">
                    <IconComponent className={`w-7 h-7 ${feature.iconColor} mr-3`} />
                    <h3 className="text-lg font-semibold text-slate-100">{feature.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-grow">{feature.description}</p>
                  {feature.placeholderQuery && (
                    <div className="mt-auto pt-4 border-t border-slate-600 flex justify-center">
                      <IphoneMockupPlaceholder
                        src={`/placeholder.svg?width=${MOCKUP_SCREEN_WIDTH}&height=${MOCKUP_SCREEN_HEIGHT}&query=${feature.placeholderQuery}`}
                        alt={`${feature.title} Mockup`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Industry Insights Section */}
      <div className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 flex justify-center">
            <Image
              src="/placeholder.svg?width=700&height=350"
              alt="Industry Trends Visualization"
              width={700}
              height={350}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Industry Trends Supporting Earlyshh’s Authentic Approach
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <Lightbulb className="w-8 h-8 text-yellow-400 mb-3" />
                <p className="text-slate-200 text-lg">
                  Local consumer recommendations outperform influencer-driven campaigns significantly.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-slate-200 text-lg">
                  Sustainable, direct community engagement is quickly becoming a key differentiator.
                </p>
              </div>
            </div>
            <div className="space-y-6 md:mt-0">
              <div className="bg-slate-700/60 p-6 rounded-lg italic border border-slate-600">
                <CheckCircle className="w-7 h-7 text-pink-400 mb-3 inline-block mr-2" />
                <span className="text-slate-300 text-lg">
                  &quot;Earlyshh’s authentic, consumer-driven approach aligns perfectly with rising market demand for
                  genuine engagement.&quot;
                </span>
                <p className="text-right text-sm text-slate-400 mt-2">- Generalized Industry Expectation</p>
              </div>
              <div className="bg-slate-700/60 p-6 rounded-lg italic border border-slate-600">
                <CheckCircle className="w-7 h-7 text-purple-400 mb-3 inline-block mr-2" />
                <span className="text-slate-300 text-lg">
                  &quot;Brands adopting direct local consumer engagement experience deeper loyalty and higher ROI.&quot;
                </span>
                <p className="text-right text-sm text-slate-400 mt-2">- Projected Market Observation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified "How Earlyshh Works" Section */}
      <div className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Simplified, Sustainable, Authentic
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {howEarlyshhWorksSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-300 group"
                >
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-6">
                    <IconComponent className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    <span className="text-purple-300 mr-2">0{index + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">{step.description}</p>
                  {step.placeholderQuery && (
                    <div className="mt-auto pt-4 border-t border-slate-600 w-full flex justify-center">
                      <IphoneMockupPlaceholder
                        src={`/placeholder.svg?width=${MOCKUP_SCREEN_WIDTH}&height=${MOCKUP_SCREEN_HEIGHT}&query=${step.placeholderQuery}`}
                        alt={`${step.title} Mockup`}
                      />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Research & Insights Section */}
      <div className="py-16 md:py-24 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16 flex justify-center">
            <Image
              src="/placeholder.svg?width=600&height=300"
              alt="Market Research Insights Graphic"
              width={600}
              height={300}
              className="rounded-lg shadow-xl object-cover"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Stay Informed with Market Trends
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Info className="w-6 h-6 text-blue-400 mb-2" />
              <h3 className="text-lg font-semibold text-slate-100 mb-1">U.S. Instagram Demographics</h3>
              <p className="text-slate-300 text-sm">
                Reports emphasize strong engagement among urban young adults (18-34), a key demographic for many DTC
                brands.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Lightbulb className="w-6 h-6 text-yellow-400 mb-2" />
              <h3 className="text-lg font-semibold text-slate-100 mb-1">Social-Driven Sampling & UGC</h3>
              <p className="text-slate-300 text-sm">
                Insights show growing effectiveness and popularity of user-generated content and social sampling in
                driving purchasing decisions.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2" />
              <h3 className="text-lg font-semibold text-slate-100 mb-1">Consumer Shift to Authenticity</h3>
              <p className="text-slate-300 text-sm">
                Analysis indicates a clear consumer preference shift towards authentic voices and away from overly
                polished traditional advertising.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="py-20 md:py-32 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 !leading-tight">
            Ready to Engage Authentically with Your Local Community?
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
