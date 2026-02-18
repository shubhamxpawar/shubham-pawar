'use client'

import Image from "next/image"

interface EducationCardProps {
  degree: string
  institution: string
  period: string
  logo?: string
}

export function EducationCard({
  degree,
  institution,
  period,
  logo,
}: EducationCardProps) {
  return (
    <article
      className="group relative flex flex-col md:flex-row gap-6 p-6 md:p-8 
                 bg-[#141414]/20 backdrop-blur-xl
                 border border-(--color-border-subtle) 
                 rounded-lg
                 transition-all duration-300 ease-smooth
                 hover:border-(--color-border-hover)
                 hover:scale-[1.01]
                 hover:shadow-(--shadow-card-hover)
                 touch-target"
      role="article"
      aria-label={`Education: ${degree} at ${institution}`}
    >
      {/* Logo Section */}
      {logo && (
        <div className="shrink-0 flex items-start justify-center md:justify-start">
          <div
            className="w-16 h-16 md:w-20 md:h-20 
                       flex items-center justify-center
                       bg-(--color-bg-tertiary) 
                       rounded-lg
                       border border-(--color-border-subtle)
                       transition-colors duration-300
                       group-hover:border-(--color-border-hover)"
          >
            <Image
              src={logo}
              alt={`${institution} logo`}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        {/* Institution Name */}
        <h3 className="text-xl md:text-2xl font-display font-normal text-(--color-text-primary) mb-2">
          {institution}
        </h3>

        {/* Degree */}
        <p className="text-base md:text-lg text-(--color-text-secondary) mb-3 font-body">
          {degree}
        </p>

        {/* Period */}
        <p className="text-sm md:text-base text-(--color-text-muted) font-body">
          {period}
        </p>
      </div>
    </article>
  )
}
