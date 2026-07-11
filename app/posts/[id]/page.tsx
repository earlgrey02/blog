import PostContent from '@/component/post/PostContent'
import { posts } from '@/lib/mdx/utils'
import { format } from 'date-fns'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
  params: Promise<{
    id: string
  }>
}

const Page = async ({ params }: Props) => {
  const { id } = await params
  const post = posts.find(post => post.id == id) ?? notFound()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-3xl px-5 pb-14 pt-10 md:pb-20 md:pt-16">
        <header className="mt-8 border-b border-border pb-7 md:mt-10 md:pb-8">
          <div className="mb-4 flex flex-col gap-2.5 sm:flex-row sm:items-center md:mb-5 md:gap-3">
            <div className="text-xs font-medium text-subtle md:text-sm">{format(post.date, 'yyyy-MM-dd')}</div>
            <div className="flex flex-wrap gap-1.5 text-xs font-medium md:gap-2 md:text-sm">
              {post.tags.map(tag => (
                <span
                  className="rounded-full border border-border bg-tag px-2 py-0.5 text-muted md:px-2.5 md:py-1"
                  key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm leading-7 text-muted md:mt-5 md:text-lg md:leading-8">{post.description}</p>
        </header>
        <div className="mt-8 md:mt-10">
          <PostContent code={post.body.code} />
        </div>
      </article>
    </main>
  )
}

const generateStaticParams = () => posts.map(post => ({ id: post.id }))

const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { id } = await params
  const post = posts.find(post => post.id == id) ?? notFound()

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: post.url
    },
    openGraph: {
      type: 'article',
      url: post.url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags
    }
  }
}

export { generateMetadata, generateStaticParams }
export default Page
