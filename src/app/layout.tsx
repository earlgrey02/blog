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
          <div className="mx-auto max-w-[52rem] px-6 pt-2 md:pt-5">
            <Header />
            <div className="py-3 md:py-6">{children}</div>
          </div>
        </RootProvider>
      </body>
    </html>
  )
}

export default Layout
