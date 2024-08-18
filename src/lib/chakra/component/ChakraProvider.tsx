'use client'
import { ChakraProvider as ChakraOriginProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import theme from '@/lib/chakra/theme'

interface Props {
  children: ReactNode
}

const ChakraProvider = ({ children }: Props) => {
  return <ChakraOriginProvider theme={theme}>{children}</ChakraOriginProvider>
}

export default ChakraProvider
