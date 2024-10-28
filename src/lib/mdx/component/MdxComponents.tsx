import type { MDXComponents } from 'mdx/types'
import NextLink from 'next/link'
import Image from './Image'
import { Link, Text } from '@chakra-ui/react'

const mdxComponents = (id: number): MDXComponents => ({
  p: ({ children }) => (
    <Text
      as="span"
      fontSize={{
        base: '0.8rem',
        sm: '0.92rem'
      }}
      lineHeight={2}
      wordBreak="break-word">
      {children}
    </Text>
  ),
  h1: ({ children }) => (
    <Text as="h1" marginTop="1.2rem" marginBottom="0.4rem" fontSize="1.3rem" fontWeight={800}>
      {children}
    </Text>
  ),
  h2: ({ children }) => (
    <Text as="h2" marginTop="1.2rem" marginBottom="0.4rem" fontSize="1.1rem" fontWeight={800}>
      {children}
    </Text>
  ),
  a: ({ href, children }) => (
    <Link as={NextLink} href={href} target="_blank" color="teal.400" fontWeight={600}>
      {children}
    </Link>
  ),
  img: ({ src, alt }) => <Image src={`/posts/${id}/${src}`} alt={alt ?? 'Unknown image'} />
})

export default mdxComponents
