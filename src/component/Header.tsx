'use client'
import { Button, Flex } from '@chakra-ui/react'
import { ArrowIcon, HomeIcon } from '@/lib/chakra/component/icons'
import ColorModeSwitch from '@/component/ColorModeSwitch'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname()

  return (
    <Flex justifyContent="space-between" alignItems="center" marginBottom="3rem">
      <Flex
        alignItems="center"
        gap={{
          base: '0.5rem',
          sm: '0.8rem'
        }}>
        {path.includes('/post/') ? (
          <Button as={Link} href="/post" padding={0}>
            <ArrowIcon
              boxSize={{
                base: '2.2rem',
                sm: '2.4rem'
              }}
            />
          </Button>
        ) : (
          <Button as={Link} href="/" padding={0}>
            <HomeIcon
              boxSize={{
                base: '1.8rem',
                sm: '2rem'
              }}
            />
          </Button>
        )}
      </Flex>
      <ColorModeSwitch />
    </Flex>
  )
}

export default Header
