import Image from "next/image"
import { whyChooseEarlyshhBenefits } from "@/data/benefits"
import { gradients } from "@/data/constants"

export default function BenefitsSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${gradients.benefits} bg-clip-text text-transparent`}>
            Why Brands Choose Earlyshh Over Influencers
          </h2>
          <p className="text-lg text-slate-300">
            Avoid costly influencer campaigns that don't resonate. Earlyshh gives you direct access to local
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
  )
}