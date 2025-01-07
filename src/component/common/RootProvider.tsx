'use client'

import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Provider as ReduxProvider } from 'react-redux'
import store from '@/lib/redux/store'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ReduxProvider>
  )
}

export default RootProvider
