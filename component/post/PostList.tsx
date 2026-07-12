'use client'

import { cn } from '@/lib/tailwind/utils'
import type { Post } from '@/lib/mdx/utils'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface Props {
  posts: Post[]
  tags: string[]
}

const PAGE_SIZE = 5
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

const PostList = ({ posts, tags }: Props) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedTag, setSelectedTag] = useState(searchParams.get('tag') ?? undefined)
  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1)
  const filteredPosts = selectedTag ? posts.filter(post => post.tags.includes(selectedTag)) : posts
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + PAGE_SIZE)
  const totalPages = Math.ceil(filteredPosts.length / PAGE_SIZE)

  const selectTag = (tag?: string) => {
    setSelectedTag(tag)
    setCurrentPage(1)
    router.replace(createPostsLink({ tag }))
  }

  const selectPage = (page: number) => {
    setCurrentPage(page)
    router.replace(createPostsLink({ page, tag: selectedTag }))
  }

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-2 md:mt-10">
        <button
          className={cn(controlClassName, 'rounded-full px-2.5 py-1.5 md:px-3', !selectedTag && activeControlClassName)}
          type="button"
          onClick={() => selectTag()}>
          All
        </button>
        {tags.map(tag => (
          <button
            className={cn(
              controlClassName,
              'rounded-full px-2.5 py-1.5 md:px-3',
              tag === selectedTag && activeControlClassName
            )}
            type="button"
            onClick={() => selectTag(tag)}
            key={tag}>
            {tag}
          </button>
        ))}
      </div>
      <PostItems posts={paginatedPosts} />
      {totalPages > 1 && (
        <nav className="mt-8 flex items-center justify-center gap-1.5 md:mt-10 md:gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
            <button
              className={cn(
                controlClassName,
                'inline-flex size-9 items-center justify-center rounded-full md:size-10',
                page === currentPage && activeControlClassName
              )}
              type="button"
              onClick={() => selectPage(page)}
              key={page}>
              {page}
            </button>
          ))}
        </nav>
      )}
    </>
  )
}

const PostItems = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mt-9 divide-y divide-border border-y border-border md:mt-12">
      {posts.length > 0 ? (
        posts.map(post => (
          <Link className="group block py-5 md:py-7" href={`/posts/${post.id}`} key={post.id}>
            <div className="mb-3 flex flex-col gap-2.5 sm:flex-row sm:items-center md:mb-4 md:gap-3">
              <div className="text-xs font-medium text-subtle md:text-sm">{post.date.slice(0, 10)}</div>
              <div className="flex flex-wrap gap-1.5 text-[0.7rem] font-medium md:gap-2 md:text-xs">
                {post.tags.map(tag => (
                  <span
                    className="rounded-full border border-border bg-tag px-2 py-0.5 text-muted md:px-2.5 md:py-1"
                    key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="text-xl font-semibold leading-7 tracking-tight transition group-hover:text-accent md:text-2xl md:leading-8">
              {post.title}
            </h2>
            <p className="mt-2.5 max-w-2xl text-[0.85rem] leading-6 text-muted md:mt-3 md:text-sm">
              {post.description}
            </p>
          </Link>
        ))
      ) : (
        <div className="py-10 text-sm leading-6 text-muted md:py-12">아직 작성된 글이 없습니다.</div>
      )}
    </div>
  )
}

export default PostList
