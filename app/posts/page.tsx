import type { Post } from '@/lib/mdx/utils'
import { posts } from '@/lib/mdx/utils'
import { cn } from '@/lib/tailwind/utils'
import { format } from 'date-fns'
import type { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  searchParams: Promise<{
    page?: string
    tag?: string
  }>
}

const metadata = {
  title: 'Posts'
} satisfies Metadata

const PAGE_SIZE = 5
const tags = Array.from(new Set(posts.flatMap(post => post.tags)))
const controlClassName =
  'border border-border text-xs font-medium text-muted transition hover:border-border-strong hover:text-foreground md:text-sm'
const activeControlClassName = 'border-accent bg-accent text-background hover:border-accent hover:text-background'

const createPostsLink = ({ page, tag }: { page?: number; tag?: string }) => {
  const params = new URLSearchParams()

  if (tag) {
    params.set('tag', tag)
  }

  if (page && page > 1) {
    params.set('page', String(page))
  }

  const query = params.toString()

  return query ? `/posts?${query}` : '/posts'
}

const Page = async ({ searchParams }: Props) => {
  const { page, tag } = await searchParams
  const currentPage = page ? Number(page) : 1
  const filteredPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-10 md:pb-20 md:pt-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-highlight md:mb-5 md:text-base">Posts</p>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">전체 글</h1>
        </div>
        <PostFilter selectedTag={tag} />
        <PostList posts={paginatedPosts} />
        <PostPaginator currentPage={currentPage} posts={filteredPosts} selectedTag={tag} />
      </section>
    </main>
  )
}

const PostFilter = ({ selectedTag }: { selectedTag?: string }) => {
  return (
    <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
      <Link
        className={cn(controlClassName, 'rounded-full px-2.5 py-1.5 md:px-3', !selectedTag && activeControlClassName)}
        href="/posts">
        All
      </Link>
      {tags.map(tag => (
        <Link
          className={cn(controlClassName, 'rounded-full px-2.5 py-1.5 md:px-3', tag === selectedTag && activeControlClassName)}
          href={createPostsLink({ tag })}
          key={tag}>
          {tag}
        </Link>
      ))}
    </div>
  )
}

const PostList = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mt-9 divide-y divide-border border-y border-border md:mt-12">
      {posts.length > 0 ? (
        posts.map(post => (
          <Link className="group block py-5 md:py-7" href={`/posts/${post.id}`} key={post.id}>
            <div className="mb-3 flex flex-col gap-2.5 sm:flex-row sm:items-center md:mb-4 md:gap-3">
              <div className="text-xs font-medium text-subtle md:text-sm">{format(post.date, 'yyyy-MM-dd')}</div>
              <div className="flex flex-wrap gap-1.5 text-[0.7rem] font-medium md:gap-2 md:text-xs">
                {post.tags.map(tag => (
                  <span className="rounded-full border border-border bg-tag px-2 py-0.5 text-muted md:px-2.5 md:py-1" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-semibold leading-7 tracking-tight transition group-hover:text-accent md:text-2xl md:leading-8">
              {post.title}
            </h2>
            <p className="mt-2.5 max-w-2xl text-[0.85rem] leading-6 text-muted md:mt-3 md:text-sm">{post.description}</p>
          </Link>
        ))
      ) : (
        <div className="py-10 text-sm leading-6 text-muted md:py-12">아직 작성된 글이 없습니다.</div>
      )}
    </div>
  )
}

const PostPaginator = ({
  currentPage,
  posts,
  selectedTag
}: {
  currentPage: number
  posts: Post[]
  selectedTag?: string
}) => {
  const totalPages = Math.ceil(posts.length / PAGE_SIZE)

  if (totalPages <= 1) {
    return
  }

  return (
    <nav className="mt-8 flex items-center justify-center gap-1.5 md:mt-10 md:gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
        <Link
          className={cn(
            controlClassName,
            'inline-flex size-9 items-center justify-center rounded-full md:size-10',
            page === currentPage && activeControlClassName
          )}
          href={createPostsLink({ page, tag: selectedTag })}
          key={page}>
          {page}
        </Link>
      ))}
    </nav>
  )
}

export { metadata }
export default Page
