import type { ThemeOverride } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import styles from '@/lib/chakra/styles'
import config from '@/lib/chakra/config'
import fonts from '@/lib/chakra/fonts'

const theme: ThemeOverride = {
  fonts,
  styles,
  config,
  semanticTokens: {
    colors: {
      'grayAlpha.200': {
        _light: 'blackAlpha.200',
        _dark: 'whiteAlpha.200'
      },
      'grayAlpha.600': {
        _light: 'blackAlpha.600',
        _dark: 'whiteAlpha.600'
      },
      'grayAlpha.800': {
        _light: 'blackAlpha.800',
        _dark: 'whiteAlpha.800'
      }
    }
  },
  components: {
    Link: {
      baseStyle: {
        transition: '0.3s',
        _hover: {
          textDecoration: 'none',
          transform: 'scale(1.05)',
          cursor: 'pointer'
        }
      }
    },
    Button: {
      baseStyle: {
        borderRadius: '50%'
      },
      defaultProps: {
        variant: 'ghost'
      }
    }
  }
}

export default extendTheme(theme)
