'use client'

import type { Variants } from 'framer-motion'

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: {
    opacity: 1,
    x: 0
  }
}

export { fadeIn, fadeInRight }
