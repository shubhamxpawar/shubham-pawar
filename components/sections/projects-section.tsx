import { projects } from '@/lib/info'
import { SectionHeading } from '@/components/ui/section-heading'
import { ProjectCard } from '@/components/cards/project-card'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

/**
 * ProjectsSection - Displays portfolio projects in a responsive grid
 * 
 * Renders the projects section with a heading and a responsive grid of
 * project cards. Grid adapts from 1 column (mobile) to 2 columns (tablet)
 * to 3 columns (desktop). Each card is wrapped in AnimatedWrapper with
 * staggered delays for a cascading reveal effect on scroll.
 * 
 * Grid configuration:
 * - Mobile (< 640px): 1 column
 * - Tablet (640px - 1024px): 2 columns
 * - Desktop (> 1024px): 3 columns
 * 
 * Requirements: 6.1, 6.3, 10.5
 */
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24"
      aria-labelledby="projects-heading"
    >
      <SectionHeading id="projects-heading">Projects</SectionHeading>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <AnimatedWrapper key={`${project.name}-${index}`} delay={index * 0.1} className="h-full">
            <ProjectCard
              name={project.name}
              subtitle={project.subtitle}
              description={project.description}
              liveUrl={project.liveUrl}
              technologies={project.technologies}
              image={project.image}
            />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}
