'use client'

import { SectionHeading } from '@/components/ui/section-heading'
import { AnimatedWrapper } from '@/components/ui/animated-wrapper'
import { skills } from '@/lib/info'
import LogoLoop from '@/components/LogoLoop'
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJavascript1,
  DiPostgresql,
} from 'react-icons/di'
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiSupabase,
  SiCplusplus,
  SiVercel,
  SiFigma,
  SiGithub,
  SiBun,
  SiNextdotjs,
} from 'react-icons/si'

/**
 * StackSection - Displays technology stack with animated icons
 * 
 * Renders the stack section with a heading and animated technology icons
 * in a continuous loop using the LogoLoop component.
 */

const iconMap: Record<string, any> = {
  'React.js': DiReact,
  'React': DiReact,
  'Node.js': DiNodejs,
  'MongoDB': DiMongodb,
  'Python': DiPython,
  'JavaScript': DiJavascript1,
  'Postgres': DiPostgresql,
  'PostgreSQL': DiPostgresql,
  'TypeScript': SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'Express.js': SiExpress,
  'Express': SiExpress,
  'Supabase': SiSupabase,
  'C++': SiCplusplus,
  'SQL': DiPostgresql,
  'Vercel': SiVercel,
  'Figma': SiFigma,
  'GitHub': SiGithub,
  'Bun': SiBun,
  'Next.js': SiNextdotjs,
}

const getIconForTech = (tech: string) => {
  return iconMap[tech] || DiReact // Default to React icon if not found
}

export function StackSection() {
  // Combine languages and stack for display
  const allTechnologies = [...skills.languages, ...skills.stack]
  
  // Create logo data for LogoLoop component
  const logos = allTechnologies.map((tech) => {
    const Icon = getIconForTech(tech)
    return {
      node: (
        <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] flex items-center justify-center">
          <Icon className="w-full h-full text-white/70 hover:text-white transition-colors duration-300" />
        </div>
      ),
      title: tech,
    }
  })

  return (
    <section
      id="stack"
      className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24"
      aria-labelledby="stack-heading"
    >
      <SectionHeading id="stack-heading">Stack</SectionHeading>
      
      <AnimatedWrapper delay={0.1}>
        <div className="relative">
          {/* Left blur gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-5 md:w-8 bg-linear-to-r from-[#0b0b0b]/2 via-[#0b0b0b]/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right blur gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-5 md:w-8 bg-linear-to-l from-[#0b0b0b]/2 via-[#0b0b0b]/80 to-transparent z-10 pointer-events-none" />
          
          <LogoLoop
            logos={logos}
            speed={90}
            hoverSpeed={0}
            logoHeight={40}
            gap={40}
            fadeOut={true}
            fadeOutColor="#0b0b0b"
            scaleOnHover={true}
            ariaLabel="Technology stack"
          />
        </div>
      </AnimatedWrapper>
    </section>
  )
}
