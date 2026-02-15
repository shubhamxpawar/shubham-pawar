'use client'

import Image from 'next/image'

interface ProjectCardProps {
  name: string
  subtitle: string
  description: string
  liveUrl?: string
  technologies: string[]
  image?: string
}

export function ProjectCard({
  name,
  subtitle,
  description,
  liveUrl,
  technologies,
  image,
}: ProjectCardProps) {
  const CardWrapper = liveUrl ? 'a' : 'article'
  const cardProps = liveUrl
    ? {
        href: liveUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        className: 'block cursor-pointer',
      }
    : {
        className: 'block',
      }

  return (
    <CardWrapper
      {...cardProps}
      role="article"
      aria-label={`Project: ${name} - ${subtitle}`}
    >
      <article
        className="group relative flex flex-col h-full min-h-[600px]
                   bg-[#141414]/20 backdrop-blur-xl
                   border border-(--color-border-subtle) 
                   rounded-lg
                   transition-all duration-300 ease-smooth
                   hover:border-(--color-border-hover)
                   hover:shadow-(--shadow-card-hover)
                   overflow-hidden
                   touch-target"
      >
        {/* Project Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-(--color-bg-tertiary)">
          {image ? (
            <Image
              src={image}
              alt={`${name} screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-400 ease-smooth
                         group-hover:scale-105"
              priority={false}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-(--color-text-muted) text-sm font-body">
                No preview available
              </div>
            </div>
          )}
          
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 bg-black/20 opacity-0 
                       transition-opacity duration-300 ease-smooth
                       group-hover:opacity-100"
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col p-6 md:p-8">
          {/* Project Name */}
          <h3 className="text-xl md:text-2xl font-display font-normal text-(--color-text-primary) mb-2 min-h-[32px] md:min-h-[36px]">
            {name}
          </h3>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-(--color-text-secondary) mb-3 font-body md:min-h-[48px] min-h-[24px]">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-sm md:text-base text-(--color-text-muted) mb-6 font-body line-clamp-3 min-h-[60px] md:min-h-[72px]">
            {description}
          </p>

          {/* Spacer to push technologies and link to bottom */}
          <div className="flex-1" />

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 min-h-[64px]">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs md:text-sm font-body h-fit
                             bg-(--color-bg-tertiary) 
                             text-(--color-text-secondary)
                             border border-(--color-border-subtle)
                             rounded-full
                             transition-colors duration-200
                             group-hover:border-(--color-border-hover)
                             group-hover:text-(--color-text-primary)"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* External Link Indicator */}
          {liveUrl && (
            <div className="flex items-center gap-2 text-sm text-(--color-text-secondary) font-body min-h-[20px]">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          )}
        </div>
      </article>
    </CardWrapper>
  )
}
