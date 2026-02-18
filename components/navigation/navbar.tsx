'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { motion, AnimatePresence, LazyMotion, m } from 'framer-motion'

interface NavbarProps {
  name: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    leetcode?: string
    email?: string
  }
}

export function Navbar({ name, socialLinks }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle mobile menu body scroll lock
  const handleMenuToggle = (open: boolean) => {
    setIsMobileMenuOpen(open)
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const scrollToSection = (sectionId: string) => {
    handleMenuToggle(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // Get initials from name
  const getInitials = (fullName: string) => {
    const parts = fullName.split(' ')
    if (parts.length >= 2) {
      return parts[0][0] + parts[1][0]
    }
    return fullName.substring(0, 2).toUpperCase()
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Name/Logo - Left */}
          <div className="shrink-0 animate-fade-in">
            <Link
              href="/"
              className="text-xl sm:text-2xl md:text-3xl font-display font-medium tracking-tight hover:text-white/70 transition-colors duration-200"
              aria-label={`${name} - Home`}
            >
              <span className="hidden md:inline">{name}</span>
              <span className="md:hidden">{getInitials(name)}</span>
            </Link>
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in animate-delay-100">
            <button
              onClick={() => scrollToSection('experience')}
              className="link-underline text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Navigate to Experience section"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('stack')}
              className="link-underline text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Navigate to Stack section"
            >
              Stack
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="link-underline text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Navigate to Projects section"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="link-underline text-sm tracking-wide text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Navigate to Education section"
            >
              Education
            </button>
          </div>

          {/* Social Icons - Right (Desktop) */}
          <div className="hidden md:flex items-center space-x-4 animate-fade-in animate-delay-200">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 touch-target"
                aria-label="Visit GitHub profile"
              >
                <FaGithub className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 touch-target"
                aria-label="Visit LinkedIn profile"
              >
                <FaLinkedin className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 touch-target"
                aria-label="Visit Twitter profile"
              >
                <FaTwitter className="w-5 h-5" aria-hidden="true" />
              </a>
            )}
            {socialLinks.leetcode && (
              <a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 touch-target"
                aria-label="Visit LeetCode profile"
              >
                <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </a>
            )}
            {socialLinks.email && (
              <a
                href={socialLinks.email}
                className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200 touch-target"
                aria-label="Send email"
              >
                <svg className="w-5 h-5" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            )}
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={() => handleMenuToggle(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => handleMenuToggle(false)}
              style={{ top: '64px' }}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/10 md:hidden"
            >
              <div className="px-4 py-6 space-y-6">
                {/* Navigation Links */}
                <div className="space-y-4">
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="block w-full text-left text-lg text-white/70 hover:text-white transition-colors duration-200 py-2"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => scrollToSection('stack')}
                    className="block w-full text-left text-lg text-white/70 hover:text-white transition-colors duration-200 py-2"
                  >
                    Stack
                  </button>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="block w-full text-left text-lg text-white/70 hover:text-white transition-colors duration-200 py-2"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => scrollToSection('education')}
                    className="block w-full text-left text-lg text-white/70 hover:text-white transition-colors duration-200 py-2"
                  >
                    Education
                  </button>
                </div>

                {/* Social Links */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-4">Connect</p>
                  <div className="flex items-center space-x-6">
                    {socialLinks.github && (
                      <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Visit GitHub profile"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {socialLinks.linkedin && (
                      <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Visit LinkedIn profile"
                      >
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    )}
                    {socialLinks.twitter && (
                      <a
                        href={socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Visit Twitter profile"
                      >
                        <FaTwitter className="w-6 h-6" />
                      </a>
                    )}
                    {socialLinks.leetcode && (
                      <a
                        href={socialLinks.leetcode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Visit LeetCode profile"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                        </svg>
                      </a>
                    )}
                    {socialLinks.email && (
                      <a
                        href={socialLinks.email}
                        className="text-white/70 hover:text-white hover:scale-110 transition-all duration-200"
                        aria-label="Send email"
                      >
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
