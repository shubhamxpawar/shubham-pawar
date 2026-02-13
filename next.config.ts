import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Enable static site generation
  images: {
    unoptimized: true, // Required for static export
  },
}

export default nextConfig
