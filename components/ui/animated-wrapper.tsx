'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

/**
 * AnimatedWrapper - Scroll-triggered animation component
 * 
 * Wraps content with fade-in and slide-up animation that triggers when
 * the element comes into view. Uses Framer Motion's useInView hook with
 * a -100px margin offset to trigger animations slightly before the element
 * enters the viewport.
 * 
 * @param children - Content to be animated
 * @param delay - Optional delay in seconds for staggered animations (default: 0)
 * @param className - Optional additional CSS classes
 * 
 * @example
 * // Basic usage
 * <AnimatedWrapper>
 *   <div>Content that fades in on scroll</div>
 * </AnimatedWrapper>
 * 
 * @example
 * // With staggered delay
 * {items.map((item, index) => (
 *   <AnimatedWrapper key={item.id} delay={index * 0.1}>
 *     <Card {...item} />
 *   </AnimatedWrapper>
 * ))}
 */
export function AnimatedWrapper({
  children,
  delay = 0,
  className,
}: AnimatedWrapperProps) {
  const ref = useRef(null)
  
  // Trigger animation when element is 100px from entering viewport
  // once: true ensures animation only plays once (no re-trigger on scroll up)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 30 }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1], // Custom easing curve for smooth, natural motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
