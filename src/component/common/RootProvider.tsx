'use client'

import type { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/lib/redux/store'

interface Props {
  children: ReactNode
}

const VercelProvider = ({ children }: Props) => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      {children}
    </>
  )
}

const RootProvider = ({ children }: Props) => {
  return (
    <VercelProvider>
      <ReduxProvider store={store}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </ReduxProvider>
    </VercelProvider>
  )
}

export default RootProvider
