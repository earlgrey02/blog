import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Head from './head'
import Header from '@/component/Header'
import ChakraProvider from '@/lib/chakra/component/ChakraProvider'
import { Box, ColorModeScript } from '@chakra-ui/react'
import config from '@/lib/chakra/config'
import VercelProvider from '@/lib/vercel/component/VercelProvider'
import ReduxProvider from '@/lib/redux/component/ReduxProvider'

interface Props {
  children: ReactNode
}

const metadata: Metadata = {
  metadataBase: new URL('https://earlgrey02.com'),
  title: {
    template: '%s | earlgrey02.com',
    default: 'earlgrey02.com'
  },
  description: 'earlgrey02의 개발 블로그입니다.',
  openGraph: {
    title: {
      template: '%s | earlgrey02.com',
      default: 'earlgrey02.com'
    },
    description: 'earlgrey02의 개발 블로그입니다.',
    url: 'https://earlgrey02.com',
    type: 'website',
    locale: 'ko'
  }
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <Head />
      <body>
        <VercelProvider>
          <ReduxProvider>
            <ChakraProvider>
              <ColorModeScript initialColorMode={config.initialColorMode} />
              <Box position="relative" maxWidth="50rem" minHeight="100vh" margin="0 auto" padding="2.5rem 1.4rem">
                <Header />
                {children}
              </Box>
            </ChakraProvider>
          </ReduxProvider>
        </VercelProvider>
      </body>
    </html>
  )
}

export { metadata }
export default Layout
