import Image from "next/image"
import { Info, Lightbulb, CheckCircle } from "lucide-react"
import { gradients } from "@/data/constants"

export default function ResearchInsightsSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 flex justify-center">
          <Image
            src="/placeholder.svg?width=600&height=300"
            alt="Market Research Insights Graphic"
            width={600}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 600px"
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${gradients.insights} bg-clip-text text-transparent`}>
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
  )
}