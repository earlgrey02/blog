'use client'
import type { Post } from 'contentlayer/generated'
import { Flex, Link, Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import TagItem from '@/component/TagItem'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  return (
    <Link
      as={NextLink}
      href={`/post/${post.id}`}
      display="flex"
      flexDirection="column"
      gap="0.2rem"
      _hover={{ transform: 'scale(1.01)' }}>
      <Text
        fontSize={{
          base: '1rem',
          sm: '1.2rem'
        }}
        fontWeight={800}>
        {post.title}
      </Text>
      <Text
        fontSize={{
          base: '0.75rem',
          sm: '0.9rem'
        }}
        marginBottom="0.2rem">
        {post.description}
      </Text>
      <Flex gap="0.3rem" marginBottom="0.4rem">
        {post.tags.map(tag => (
          <TagItem tag={tag} key={tag} />
        ))}
      </Flex>
      <Text
        fontSize={{
          base: '0.65rem',
          sm: '0.8rem'
        }}
        color="grayAlpha.600">
        {post.date.substring(0, 10)}
      </Text>
    </Link>
  )
}

export default PostItem
