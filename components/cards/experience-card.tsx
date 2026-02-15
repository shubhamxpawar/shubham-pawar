'use client'

interface ExperienceCardProps {
  company: string
  role: string
  type: string
  period: string
  description: string
  logo?: string
}

export function ExperienceCard({
  company,
  role,
  type,
  period,
  description,
  logo,
}: ExperienceCardProps) {
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
      aria-label={`Experience: ${role} at ${company}`}
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
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        {/* Company Name */}
        <h3 className="text-xl md:text-2xl font-display font-normal text-(--color-text-primary) mb-2">
          {company}
        </h3>

        {/* Role */}
        <p className="text-xl md:text-2xl text-(--color-text-secondary) mb-2 font-body">
          {role}
        </p>

        {/* Type and Period */}
        <div className="flex flex-wrap items-center gap-2 mb-3 text-sm md:text-base text-(--color-text-muted) font-body">
          {type && <span>{type}</span>}
          {type && period && <span className="text-(--color-text-muted)">•</span>}
          {period && <span>{period}</span>}
        </div>

        {/* Description */}
        {description && (
          <p className="text-sm md:text-base text-(--color-text-secondary) font-body leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </article>
  )
}
