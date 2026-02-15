import { Navbar } from '@/components/navigation/navbar'
import { HeroSection } from '@/components/sections/hero-section'
import { EducationSection } from '@/components/sections/education-section'
import { ExperienceSection } from '@/components/sections/experience-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { StackSection } from '@/components/sections/stack-section'
import { personalInfo } from '@/lib/info'
import Silk from '@/components/Silk'

export default function Home() {
  return (
    <>
      {/* Fixed background - Silk animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Silk 
          speed={3.3}
          scale={0.9}
          noiseIntensity={1.1}
          rotation={0}
          color="#202020"
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar name={personalInfo.name} socialLinks={personalInfo.social} />
        <main className="min-h-screen">
          <HeroSection summary={personalInfo.summary} />
          <ExperienceSection />
          <StackSection />
          <ProjectsSection />
          <EducationSection />
        </main>
      </div>
    </>
  )
}
