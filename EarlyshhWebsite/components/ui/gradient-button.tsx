import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  icon?: LucideIcon
  iconSide?: 'left' | 'right'
  gradient?: string
  hoverGradient?: string
  size?: 'sm' | 'default' | 'lg'
  className?: string
  asChild?: boolean
}

export function GradientButton({ 
  children, 
  icon: IconComponent, 
  iconSide = 'left',
  gradient = "from-teal-400 to-cyan-500",
  hoverGradient = "from-teal-500 to-cyan-600",
  size = 'lg',
  className = "",
  asChild = false,
  ...props 
}: GradientButtonProps) {
  const baseClasses = `bg-gradient-to-r ${gradient} hover:${hoverGradient} text-slate-900 font-bold rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105 group`
  
  const sizeClasses = {
    sm: "h-10 px-6 text-sm",
    default: "h-12 px-8 text-base", 
    lg: "h-14 px-10 text-lg"
  }

  return (
    <Button
      asChild={asChild}
      size={size}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {asChild ? children : (
        <>
          {IconComponent && iconSide === 'left' && (
            <IconComponent className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:animate-pulse" />
          )}
          {children}
          {IconComponent && iconSide === 'right' && (
            <IconComponent className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </>
      )}
    </Button>
  )
}