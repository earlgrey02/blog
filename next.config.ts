import type { NextConfig } from 'next'

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ],
    deviceSizes: [640, 1080, 1200],
    imageSizes: [32, 64, 128]
  }
}

export default config
