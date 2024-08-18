import VercelProvider from '@/lib/vercel/component/VercelProvider'
import ReduxProvider from '@/lib/redux/component/ReduxProvider'
import ChakraProvider from '@/lib/chakra/component/ChakraProvider'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <VercelProvider>
      <ReduxProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </ReduxProvider>
    </VercelProvider>
  )
}

export default RootProvider
