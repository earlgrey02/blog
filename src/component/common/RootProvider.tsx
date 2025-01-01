import type { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { RecoilRoot } from 'recoil'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default RootProvider
