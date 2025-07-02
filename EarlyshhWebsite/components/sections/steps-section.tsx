import { howEarlyshhWorksSteps } from "@/data/steps"
import { MOCKUP_SCREEN_WIDTH, MOCKUP_SCREEN_HEIGHT, gradients } from "@/data/constants"
import IphoneMockupPlaceholder from "@/components/iphone-mockup-placeholder"

export default function StepsSection() {
  return (
    <div className="py-16 md:py-24 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${gradients.steps} bg-clip-text text-transparent`}>
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
  )
}