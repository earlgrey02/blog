import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

interface Props {
  children: ReactNode
}

const VercelProvider = ({ children }: Props) => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      {children}
    </>
  )
}

export default VercelProvider
