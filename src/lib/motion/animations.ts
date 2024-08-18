'use client'
import type { Variants } from 'framer-motion'
import { keyframes } from '@emotion/react'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}

const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: {
    opacity: 1,
    y: 0
  }
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

export { spin, fadeIn, fadeInUp, fadeInRight }
