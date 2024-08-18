'use client'
import { ChakraProvider as ChakraOriginProvider, ColorModeScript } from '@chakra-ui/react'
import type { ReactNode } from 'react'
import theme from '@/lib/chakra/theme'
import config from '@/lib/chakra/config'

interface Props {
  children: ReactNode
}

const ChakraProvider = ({ children }: Props) => {
  return (
    <ChakraOriginProvider theme={theme}>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      {children}
    </ChakraOriginProvider>
  )
}

export default ChakraProvider
