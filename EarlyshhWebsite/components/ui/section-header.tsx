interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  gradient: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  gradient, 
  centered = true,
  className = "" 
}: SectionHeaderProps) {
  const containerClasses = centered 
    ? "text-center max-w-3xl mx-auto mb-12 md:mb-16" 
    : "mb-12 md:mb-16"

  return (
    <div className={`${containerClasses} ${className}`}>
      <h2 className={`text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm text-cyan-300 uppercase tracking-wider font-semibold mb-4">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="text-lg text-slate-300">
          {description}
        </p>
      )}
    </div>
  )
}