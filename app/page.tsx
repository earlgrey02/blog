import { posts } from '@/lib/mdx/utils'
import { format } from 'date-fns'
import Link from 'next/link'

const recentPosts = posts.slice(0, 3)

const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Intro />
      <RecentPostList />
      <Footer />
    </main>
  )
}

const Intro = () => {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-12 pt-12 md:pb-20 md:pt-24">
      <div className="max-w-3xl">
        <p
          className="mb-4 inline-flex rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-medium text-highlight md:mb-5 md:px-3 md:text-sm">
          Notes and logs
        </p>
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
          earlgrey02의 블로그
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted md:mt-6 md:text-lg md:leading-8">
          생각과 경험을 차분하게 정리하는 개인 기록 공간입니다.
        </p>
      </div>
      <dl className="mt-8 grid max-w-md grid-cols-2 gap-3 border-y border-border py-4 text-xs md:mt-10 md:py-5 md:text-sm">
        <div>
          <dt className="text-subtle">Posts</dt>
          <dd className="mt-1 font-medium text-foreground">{posts.length}</dd>
        </div>
        {posts[0] && (
          <div>
            <dt className="text-subtle">Updated</dt>
            <dd className="mt-1 font-medium text-foreground">{format(posts[0].date, 'yyyy-MM-dd')}</dd>
          </div>
        )}
      </dl>
    </section>
  )
}

const RecentPostList = () => {
  return (
    <section className="border-y border-border bg-surface-strong">
      <div className="mx-auto max-w-5xl px-5 py-11 md:py-16">
        <div className="mb-6 flex items-end justify-between gap-5 md:mb-8 md:gap-6">
          <div>
            <p className="text-xs font-medium text-highlight md:text-sm">Recent Posts</p>
            <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground md:mt-2 md:text-3xl">최근 글</h2>
          </div>
          <Link className="text-xs font-medium text-accent transition hover:text-accent-strong md:text-sm" href="/posts">
            전체 보기
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {recentPosts.map(post => (
            <Link
              className="group flex min-h-48 flex-col rounded-lg border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-border-strong hover:shadow-card md:min-h-56 md:p-6"
              href={`/posts/${post.id}`}
              key={post.id}>
              <div className="mb-5 flex items-start justify-between gap-3 text-[0.7rem] font-medium text-subtle md:mb-6 md:gap-4 md:text-xs">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {post.tags.slice(0, 2).map(tag => (
                    <span className="rounded-full border border-border bg-tag px-2 py-0.5 text-muted md:px-2.5 md:py-1" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="shrink-0">{format(post.date, 'yyyy-MM-dd')}</span>
              </div>
              <h3 className="text-lg font-semibold leading-6 tracking-tight text-foreground transition group-hover:text-accent md:text-xl md:leading-7">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.85rem] leading-6 text-muted md:mt-4 md:text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-5 py-7 text-xs text-subtle md:py-8 md:text-sm">
      <p>© 2026 earlgrey02</p>
    </footer>
  )
}

export default Page
