import '@/public/style/global.css'
import Header from '@/component/common/Header'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

const metadata = {
  title: 'earlgrey02의 블로그'
} satisfies Metadata

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <RootProvider>
          <Header />
          {children}
        </RootProvider>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
