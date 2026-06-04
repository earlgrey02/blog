import type { Post } from '@/lib/posts'
import { posts } from '@/lib/posts'
import { cn } from '@/lib/tailwind/utils'
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
  'border border-border text-sm font-medium text-muted transition hover:border-border-strong hover:text-foreground'
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
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-medium text-highlight">Posts</p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">전체 글</h1>
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
    <div className="mt-10 flex flex-wrap gap-2">
      <Link
        className={cn(controlClassName, 'rounded-full px-3 py-1.5', !selectedTag && activeControlClassName)}
        href="/posts">
        All
      </Link>
      {tags.map(tag => (
        <Link
          className={cn(controlClassName, 'rounded-full px-3 py-1.5', tag === selectedTag && activeControlClassName)}
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
    <div className="mt-12 divide-y divide-border border-y border-border">
      {posts.length > 0 ? (
        posts.map(post => (
          <Link className="group block py-7" href={`/posts/${post.id}`} key={post.id}>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium text-subtle">
              <time dateTime={post.date.replaceAll('.', '-')}>{post.date}</time>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span className="rounded-full border border-border bg-tag px-2.5 py-1 text-muted" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-2xl font-semibold leading-8 tracking-tight transition group-hover:text-accent">
              {post.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{post.description}</p>
          </Link>
        ))
      ) : (
        <div className="py-12 text-sm leading-6 text-muted">아직 작성된 글이 없습니다.</div>
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
    return null
  }

  return (
    <nav className="mt-10 flex items-center justify-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
        <Link
          className={cn(
            controlClassName,
            'inline-flex size-10 items-center justify-center rounded-full',
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
