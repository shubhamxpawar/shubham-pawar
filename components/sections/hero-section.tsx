'use client'

import { motion } from 'framer-motion'
import ShinyText from '@/components/ShinyText'

interface HeroSectionProps {
  summary: string
  summary2: string
}

export function HeroSection({ summary, summary2 }: HeroSectionProps) {
  // Terms that should be emphasized
  const emphasisTerms = [
    'fullstack development',
    'gen AI',
    'elegant',
    'practical',
    'scalable',
  ]

  const parseSummary = (text: string) => {
    const words = text.split(' ')

    const segments: Array<{
      text: string
      isEmphasized: boolean
    }> = []

    let currentSegment = ''

    for (let i = 0; i < words.length; i++) {
      const word = words[i]

      const startsEmphasis = emphasisTerms.some(term => {
        const termWords = term.split(' ')
        const upcomingWords = words.slice(i, i + termWords.length).join(' ')
        return upcomingWords.toLowerCase() === term.toLowerCase()
      })

      if (startsEmphasis) {
        if (currentSegment) {
          segments.push({
            text: currentSegment.trim(),
            isEmphasized: false,
          })
          currentSegment = ''
        }

        const matchedTerm = emphasisTerms.find(term => {
          const termWords = term.split(' ')
          const upcomingWords = words.slice(i, i + termWords.length).join(' ')
          return upcomingWords.toLowerCase() === term.toLowerCase()
        })

        if (matchedTerm) {
          segments.push({
            text: matchedTerm,
            isEmphasized: true,
          })

          i += matchedTerm.split(' ').length - 1
          continue
        }
      }

      currentSegment += word + ' '
    }

    if (currentSegment) {
      segments.push({
        text: currentSegment.trim(),
        isEmphasized: false,
      })
    }

    return segments
  }

  const segments = parseSummary(summary)
  const segments2 = parseSummary(summary2)

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
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const renderSummary = (
    segments: Array<{ text: string; isEmphasized: boolean }>
  ) => (
    <>
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
    </>
  )

  return (
    <section
      className="relative flex min-h-0 md:min-h-screen items-center justify-center px-4 sm:px-6 md:px-8 pt-50 md:pt-20 pb-12 sm:pb-16 md:pb-0"
      aria-label="Hero section"
    >
      <div className="max-w-5xl w-full">
        {/* Greeting Text */}
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
              text="Shubham"
              className="decoration-1 sm:decoration-2 underline font-extrabold underline-offset-4 sm:underline-offset-8 decoration-white/40 ml-2 sm:ml-4"
            />
          </div>
        </motion.div>

        {/* Summary 1 */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light leading-[1.2] sm:leading-[1.15] tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={summary}
        >
          {renderSummary(segments)}
        </motion.h1>

        {/* Summary 2 */}
        <motion.h1
          className="mt-2 sm:mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-light leading-[1.2] sm:leading-[1.15] tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={summary2}
        >
          {renderSummary(segments2)}
        </motion.h1>
      </div>
    </section>
  )
}
