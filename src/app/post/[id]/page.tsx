import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Markdown from '@/component/post/Markdown'
import Separator from '@/component/ui/Separator'
import { getPostById, getPosts } from '@/lib/contentlayer/util'

interface Props {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {
  const { id } = await params
  const post = getPostById(id) ?? notFound()

  return (
    <div className="flex flex-col gap-4 break-words pb-12 md:gap-6">
      <div className="flex flex-col gap-0.5 md:gap-2.5">
        <div className="text-xl font-extrabold md:text-[1.7rem]">{post.title}</div>
        <div className="text-sm font-light md:text-[1rem]">{post.description}</div>
        <div className="mt-1 text-[0.7rem] text-neutral-500 md:text-xs">{post.date.split('T')[0]}</div>
      </div>
      <Separator />
      <div>
        <Markdown post={post} />
      </div>
    </div>
  )
}

const generateStaticParams = () => getPosts().map(post => ({ id: post.id }))

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const { title, description, tags } = getPostById(id) ?? notFound()

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
