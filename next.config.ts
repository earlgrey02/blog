import type { NextConfig } from 'next'

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ]
  }
} satisfies NextConfig

export default config
