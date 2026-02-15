import { education } from '@/lib/info'
import { SectionHeading } from '@/components/ui/section-heading'
import { EducationCard } from '@/components/cards/education-card'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'

/**
 * EducationSection - Displays educational background
 * 
 * Renders the education section with a heading and education card.
 * Wrapped in AnimatedWrapper for scroll-triggered fade-in animation.
 * 
 * Requirements: 4.1, 10.3
 */
export function EducationSection() {
  return (
    <section
      id="education"
      className="w-full max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-48"
      aria-labelledby="education-heading"
    >
      <SectionHeading id="education-heading">Education</SectionHeading>
      
      <AnimatedWrapper delay={0.1}>
        <EducationCard
          degree={education.degree}
          institution={education.institution}
          period={education.period}
        />
      </AnimatedWrapper>
    </section>
  )
}
