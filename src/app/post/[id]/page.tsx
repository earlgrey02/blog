import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostById, getPosts } from '@/module/post/api'

interface Props {
  params: { id: string }
}

const Page = ({ params }: Props) => {
  const post = getPostById(params.id) ?? notFound()

  return <></>
}

const generateStaticParams = () => {
  const posts = getPosts()

  return posts.map(post => ({ id: post.id }))
}

const generateMetadata = ({ params }: Props): Metadata => {
  const { frontmatter } = getPostById(params.id) ?? notFound()
  const { title, description, tags } = frontmatter

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article'
    },
    keywords: tags
  }
}

export { generateStaticParams, generateMetadata }
export default Page
