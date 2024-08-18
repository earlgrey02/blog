import VercelProvider from '@/lib/vercel/component/VercelProvider'
import ReduxProvider from '@/lib/redux/component/ReduxProvider'
import ChakraProvider from '@/lib/chakra/component/ChakraProvider'
import type { ReactNode } from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import config from '@/lib/chakra/config'

interface Props {
  children: ReactNode
}

const RootProvider = ({ children }: Props) => {
  return (
    <VercelProvider>
      <ReduxProvider>
        <ChakraProvider>
          <ColorModeScript initialColorMode={config.initialColorMode} />
          {children}
        </ChakraProvider>
      </ReduxProvider>
    </VercelProvider>
  )
}

export default RootProvider
