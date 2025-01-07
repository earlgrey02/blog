import { notFound } from 'next/navigation'
import Markdown from '@/component/post/Markdown'
import Separator from '@/component/ui/Separator'
import { getPostById } from '@/lib/contentlayer/util'

interface Props {
  params: Promise<{ id: string }>
}

const Page = async ({ params }: Props) => {
  const { id } = await params
  const post = getPostById(id) ?? notFound()

  return (
    <div className="flex flex-col gap-4 pb-12 md:gap-6">
      <div className="flex flex-col gap-0.5 break-keep md:gap-1.5">
        <div className="text-xl font-extrabold md:text-[1.6rem]">{post.title}</div>
        <div className="text-sm font-light md:text-[1rem]">{post.description}</div>
        <div className="mt-2 text-[0.7rem] text-neutral-500 md:text-xs">{post.date.split('T')[0]}</div>
      </div>
      <Separator />
      <Markdown post={post} />
    </div>
  )
}

export default Page
