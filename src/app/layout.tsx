import '../../public/style/global.css'
import type { ReactNode } from 'react'
import RootProvider from '@/component/common/RootProvider'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}

export default Layout
