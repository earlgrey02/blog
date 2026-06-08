'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <VercelProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </VercelProvider>
  )
}

const VercelProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default RootProvider
