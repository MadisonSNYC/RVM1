import { futureFocusedFeatures } from "@/data/features"
import { MOCKUP_SCREEN_WIDTH, MOCKUP_SCREEN_HEIGHT, gradients } from "@/data/constants"
import IphoneMockupPlaceholder from "@/components/iphone-mockup-placeholder"

export default function FeaturesSection() {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r ${gradients.features} bg-clip-text text-transparent`}>
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
  )
}