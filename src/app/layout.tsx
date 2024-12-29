import './global.css'

import type { ReactNode } from 'react'
import Header from '@/component/common/Header'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <RootProvider>
          <div className="mx-auto min-h-screen max-w-[52rem] p-6">
            <Header />
            {children}
          </div>
        </RootProvider>
      </body>
    </html>
  )
}

export default Layout
