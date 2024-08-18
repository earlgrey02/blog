import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { getPostById } from '@/module/post/api'
import type { Metadata } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'
import mdxComponents from '@/lib/mdx/component/MdxComponents'
import { Divider, Flex, Text } from '@chakra-ui/react'

interface Props {
  params: { id: number }
}

const Page = ({ params }: Props) => {
  const post = getPostById(params.id)

  if (!post) notFound()

  const MarkDown = useMDXComponent(post.body.code)

  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" gap="0.2rem">
        <Text
          fontSize={{
            base: '1.4rem',
            sm: '1.6rem'
          }}
          fontWeight={800}>
          {post.title}
        </Text>
        <Text
          marginBottom="0.2rem"
          fontSize={{
            base: '0.9rem',
            sm: '1rem'
          }}
          color="grayAlpha.800"
          wordBreak="keep-all">
          {post.description}
        </Text>
        <Text fontSize="0.8rem" color="grayAlpha.600" fontWeight={300}>
          {post.date.substring(0, 10)}
        </Text>
      </Flex>
      <Divider marginY="1.8rem" />
      <MarkDown components={mdxComponents(post.id)} />
    </Flex>
  )
}

const generateStaticParams = () => allPosts.map(post => ({ id: post.id.toString() }))

const generateMetadata = ({ params }: Props): Metadata => {
  const post = getPostById(params.id)
  if (!post) notFound()

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article'
    },
    keywords: post.tags
  }
}

export { generateStaticParams, generateMetadata }
export default Page
