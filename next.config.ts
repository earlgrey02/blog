import type { NextConfig as Config } from 'next'
import { withContentlayer } from 'next-contentlayer'

const config: Config = {
  eslint: {
    ignoreDuringBuilds: true
  }
}

export default withContentlayer(config)
