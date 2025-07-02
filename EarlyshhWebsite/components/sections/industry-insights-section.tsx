import Image from "next/image"
import { Lightbulb, TrendingUp, CheckCircle } from "lucide-react"
import { gradients } from "@/data/constants"

export default function IndustryInsightsSection() {
  return (
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
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${gradients.insights} bg-clip-text text-transparent`}>
            Industry Trends Supporting Earlyshh's Authentic Approach
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
                &quot;Earlyshh's authentic, consumer-driven approach aligns perfectly with rising market demand for
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
  )
}