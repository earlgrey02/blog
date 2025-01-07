import '../../public/style/global.css'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

export default Layout
