import PostList from '@/component/post/PostList'
import { posts } from '@/lib/mdx/utils'
import type { Metadata } from 'next'
import { Suspense } from 'react'

const metadata: Metadata = {
  title: 'Posts'
}

const tags = Array.from(new Set(posts.flatMap(post => post.tags)))

const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-10 md:pb-20 md:pt-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-highlight md:mb-5 md:text-base">Posts</p>
          <h1 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">전체 글</h1>
        </div>
        <Suspense>
          <PostList posts={posts} tags={tags} />
        </Suspense>
      </section>
    </main>
  )
}

export { metadata }
export default Page
