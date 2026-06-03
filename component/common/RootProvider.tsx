'use client'

import { ThemeProvider } from 'next-themes'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  )
}

export default RootProvider
