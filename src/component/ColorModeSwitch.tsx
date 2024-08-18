'use client'
import { MoonIcon, SunIcon } from '@/lib/chakra/component/icons'
import { Button, useColorMode } from '@chakra-ui/react'

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button padding={0} onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <MoonIcon
          boxSize={{
            base: '1.6rem',
            sm: '1.8rem'
          }}
        />
      ) : (
        <SunIcon
          boxSize={{
            base: '1.6rem',
            sm: '1.8rem'
          }}
        />
      )}
    </Button>
  )
}

export default ColorModeSwitch
