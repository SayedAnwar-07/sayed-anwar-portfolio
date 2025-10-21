import React from "react"

interface HeaderProps {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center"
  showDivider?: boolean
}

export const Header: React.FC<HeaderProps> = ({ 
  title, 
  subtitle, 
  description,
  align = "left",
}) => {
  const alignmentClass = align === "center" ? "text-center mx-auto" : "text-left"
  
  return (
    <div className={`mb-16 md:mb-28 max-w-4xl ${alignmentClass}`}>
      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm font-semibold text-[#9ac72a] dark:text-[#bde64e] mb-3 uppercase tracking-wider">
          {subtitle}
        </p>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="border-l-2 pl-6 border-[#9ac72a] text-lg text-gray-600 dark:text-gray-200 mb-6 leading-relaxed">
          {description}
        </p>
      )}


    </div>
  )
}