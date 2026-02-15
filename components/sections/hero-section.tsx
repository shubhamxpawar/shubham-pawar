'use client'

import { motion } from 'framer-motion'
//import { ShinyText } from '@/components/ShinyText'
import ShinyText from '@/components/ShinyText'

interface HeroSectionProps {
  summary: string
}

export function HeroSection({ summary }: HeroSectionProps) {
  // Parse summary to identify key terms that should be emphasized
  // These terms will be styled with italic display font
  const emphasisTerms = [
    'fullstack development',
    'gen AI',
    'elegant',
    'practical',
    'scalable',
  ]

  // Split summary into words and identify which should be emphasized
  const words = summary.split(' ')
  
  // Create segments that group words, marking emphasis spans
  const segments: Array<{ text: string; isEmphasized: boolean }> = []
  let currentSegment = ''
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    
    // Check if this word starts an emphasized phrase
    const startsEmphasis = emphasisTerms.some(term => {
      const termWords = term.split(' ')
      const upcomingWords = words.slice(i, i + termWords.length).join(' ')
      return upcomingWords.toLowerCase() === term.toLowerCase()
    })
    
    if (startsEmphasis) {
      // Save current segment if it exists
      if (currentSegment) {
        segments.push({ text: currentSegment.trim(), isEmphasized: false })
        currentSegment = ''
      }
      
      // Find the full emphasized phrase
      const matchedTerm = emphasisTerms.find(term => {
        const termWords = term.split(' ')
        const upcomingWords = words.slice(i, i + termWords.length).join(' ')
        return upcomingWords.toLowerCase() === term.toLowerCase()
      })
      
      if (matchedTerm) {
        segments.push({ text: matchedTerm, isEmphasized: true })
        // Skip ahead by the number of words in the phrase
        i += matchedTerm.split(' ').length - 1
        continue
      }
    }
    
    // Add word to current segment
    currentSegment += word + ' '
  }
  
  // Add remaining segment
  if (currentSegment) {
    segments.push({ text: currentSegment.trim(), isEmphasized: false })
  }

  // Animation variants for staggered word reveals
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const, // Custom easing for smooth motion
      },
    },
  }

  return (
    <section
      className="relative flex min-h-0 md:min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 pt-50 md:pt-20 pb-12 sm:pb-16 md:pb-0"
      aria-label="Hero section"
    >
      <div className="max-w-5xl w-full">
        {/* Greeting Text with Shiny Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8 md:mb-12"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light text-white/90">
            <ShinyText 
              text="Hi, I am" 
              className="decoration-1 sm:decoration-2 decoration-white/40"
            />
            <ShinyText 
              text='Shubham'
              className="decoration-1 sm:decoration-2 underline font-extrabold underline-offset-4 sm:underline-offset-8 decoration-white/40 ml-2 sm:ml-4"
            />
          </div>
        </motion.div>

        {/* Main Summary Text */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-light leading-[1.2] sm:leading-[1.15] tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={summary}
        >
          {segments.map((segment, segmentIndex) => (
            <span key={segmentIndex}>
              {segment.text.split(' ').map((word, wordIndex) => (
                <motion.span
                  key={`${segmentIndex}-${wordIndex}`}
                  variants={wordVariants}
                  className={`inline-block mr-[0.3em] ${
                    segment.isEmphasized
                      ? 'italic font-display text-white'
                      : 'text-white/90'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </div>
    </section>
  )
}
