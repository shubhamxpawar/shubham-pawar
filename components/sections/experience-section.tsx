import { experience } from '@/lib/info'
import { SectionHeading } from '@/components/ui/section-heading'
import { ExperienceCard } from '@/components/cards/experience-card'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

/**
 * ExperienceSection - Displays work experience history
 * 
 * Renders the experience section with a heading and a vertical list of
 * experience cards. Each card is wrapped in AnimatedWrapper with staggered
 * delays for a cascading reveal effect on scroll.
 * 
 * Requirements: 5.1, 5.3, 10.4
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-24"
      aria-labelledby="experience-heading"
    >
      <SectionHeading id="experience-heading">Experience</SectionHeading>
      
      <div className="flex flex-col gap-6 md:gap-8">
        {experience.map((exp, index) => (
          <AnimatedWrapper key={exp.company} delay={index * 0.1}>
            <ExperienceCard
              company={exp.company}
              role={exp.role}
              type={exp.type}
              period={exp.period}
              description={exp.description}
            />
          </AnimatedWrapper>
        ))}
      </div>
    </section>
  )
}
