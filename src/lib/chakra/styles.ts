import type { Styles } from '@chakra-ui/theme-tools'
import { mode } from '@chakra-ui/theme-tools'
import type { SystemStyleFunction } from '@chakra-ui/react'

const codeStyle: SystemStyleFunction = props => ({
  span: {
    '& > code': {
      marginX: '0.1rem',
      paddingX: '0.4rem',
      paddingY: '0.2rem',
      borderRadius: '0.2rem',
      color: 'grayAlpha.800',
      backgroundColor: 'grayAlpha.200',
      fontSize: '0.75rem',
      fontWeight: 300
    }
  },
  code: {
    fontFamily: 'JetBrains Mono',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    '&[data-line-numbers]': {
      counterReset: 'line',
      '& > span[data-line]::before': {
        marginX: '0.6rem',
        color: 'whiteAlpha.500',
        counterIncrement: 'line',
        content: 'counter(line)'
      }
    },
    '& > span[data-highlighted-line]': {
      borderLeft: '0.15rem solid rgb(255, 255, 255, 0.5)',
      backgroundColor: 'whiteAlpha.100'
    }
  },
  figure: {
    '& > pre': {
      marginTop: '1rem',
      marginBottom: '0.6rem',
      padding: '1rem',
      borderRadius: '0.4rem'
    },
    '& > pre > code': {
      fontSize: { base: '0.7rem', sm: '0.8rem' },
      fontWeight: 500,
      lineHeight: 1.5,
      overflowX: 'scroll'
    }
  },
  figcaption: {
    '&[data-rehype-pretty-code-title]': {
      marginTop: '1rem',
      paddingX: '0.9rem',
      paddingY: '0.7rem',
      borderBottom: 0,
      borderTopRadius: '0.4rem',
      backgroundColor: mode('blackAlpha.800', 'blackAlpha.300')(props),
      fontSize: '0.75rem',
      color: 'rgb(200, 200, 200)',
      '& + pre': {
        marginTop: 0,
        borderTopRadius: 0
      }
    }
  }
})

const styles: Styles = {
  global: props => ({
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      WebkitTextSizeAdjust: 'none',
      WebkitTouchCallout: 'none'
    },
    body: {
      backgroundColor: 'whiteAlpha.200'
    },
    ...codeStyle(props)
  })
}

export default styles
