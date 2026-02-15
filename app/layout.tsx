import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/lib/info'

// Display font for headings - distinctive serif with character
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

// Body font - refined sans-serif
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.summary,
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.summary,
  },
  keywords: [
    'portfolio',
    'full stack developer',
    'web development',
    'React',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  )
}
