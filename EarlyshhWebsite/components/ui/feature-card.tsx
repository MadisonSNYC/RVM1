import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  iconColor: string
  bgColor?: string
  borderColor?: string
  variant?: 'benefit' | 'feature' | 'step'
  index?: number
  children?: React.ReactNode
}

export function FeatureCard({ 
  icon: IconComponent, 
  title, 
  description, 
  iconColor, 
  bgColor = "from-slate-500/10 to-slate-600/10",
  borderColor = "border-slate-600",
  variant = 'feature',
  index,
  children 
}: FeatureCardProps) {
  const getCardClasses = () => {
    switch (variant) {
      case 'benefit':
        return `bg-slate-800/70 p-6 rounded-xl shadow-lg border ${borderColor} hover:shadow-xl hover:border-transparent hover:bg-gradient-to-br ${bgColor} transition-all duration-300 transform hover:-translate-y-1 flex flex-col`
      case 'step':
        return "flex flex-col items-center text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors duration-300 group"
      default:
        return "bg-slate-800/60 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300 flex flex-col group"
    }
  }

  const getIconWrapper = () => {
    switch (variant) {
      case 'benefit':
        return (
          <div className={`p-2 rounded-lg bg-gradient-to-br ${bgColor} mr-3`}>
            <IconComponent className={`w-6 h-6 ${iconColor}`} />
          </div>
        )
      case 'step':
        return (
          <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full mb-6">
            <IconComponent className="w-10 h-10 text-pink-400" />
          </div>
        )
      default:
        return <IconComponent className={`w-7 h-7 ${iconColor} mr-3`} />
    }
  }

  const getTitleClasses = () => {
    switch (variant) {
      case 'benefit':
        return "text-lg font-bold text-slate-100"
      case 'step':
        return "text-xl font-bold text-slate-100 mb-2"
      default:
        return "text-lg font-semibold text-slate-100"
    }
  }

  const getDescriptionClasses = () => {
    switch (variant) {
      case 'step':
        return "text-slate-300 text-sm leading-relaxed mb-4"
      default:
        return "text-slate-300 text-sm leading-relaxed flex-grow"
    }
  }

  return (
    <div className={getCardClasses()}>
      {variant === 'step' ? (
        <>
          {getIconWrapper()}
          <h3 className={getTitleClasses()}>
            {typeof index === 'number' && (
              <span className="text-purple-300 mr-2">0{index + 1}.</span>
            )}
            {title}
          </h3>
          <p className={getDescriptionClasses()}>{description}</p>
          {children}
        </>
      ) : (
        <>
          <div className="flex items-center mb-4">
            {getIconWrapper()}
            <h3 className={getTitleClasses()}>{title}</h3>
          </div>
          <p className={getDescriptionClasses()}>{description}</p>
          {children}
        </>
      )}
    </div>
  )
}