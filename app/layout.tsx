import '@/public/style/global.css'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Readonly<Props>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Layout
