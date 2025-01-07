import '../../public/style/global.css'
import type { ReactNode } from 'react'
import Header from '@/component/common/Header'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

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

export default Layout
