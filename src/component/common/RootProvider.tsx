import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

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
