import './global.css'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default Layout
