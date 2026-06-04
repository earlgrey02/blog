import { getLatestPostDate, posts } from '@/lib/posts'
import Link from 'next/link'

const latestPostDate = getLatestPostDate()
const recentPosts = posts.slice(0, 3)

const Page = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Intro />
      <PostList />
      <Footer />
    </main>
  )
}

const Intro = () => {
  return (
    <section className="mx-auto max-w-5xl px-5 pb-14 pt-16 md:pb-20 md:pt-24">
      <div className="max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-highlight">
          Notes and logs
        </p>
        <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground md:text-6xl">
          earlgrey02의 블로그
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
          생각과 경험을 차분하게 정리하는 개인 기록 공간입니다.
        </p>
      </div>
      <dl className="mt-10 grid max-w-md grid-cols-2 gap-3 border-y border-border py-5 text-sm">
        <div>
          <dt className="text-subtle">Posts</dt>
          <dd className="mt-1 font-medium text-foreground">{posts.length}</dd>
        </div>
        <div>
          <dt className="text-subtle">Updated</dt>
          <dd className="mt-1 font-medium text-foreground">{latestPostDate ?? '-'}</dd>
        </div>
      </dl>
    </section>
  )
}

const PostList = () => {
  return (
    <section className="border-y border-border bg-surface-strong">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-highlight">Recent Posts</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">최근 글</h2>
          </div>

          <Link className="text-sm font-medium text-accent transition hover:text-accent-strong" href="/posts">
            전체 보기
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {recentPosts.map(post => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="group flex min-h-56 flex-col rounded-lg border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-border-strong hover:shadow-card">
              <div className="mb-6 flex items-start justify-between gap-4 text-xs font-medium text-subtle">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="rounded-full border border-border bg-tag px-2.5 py-1 text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="shrink-0">{post.date}</span>
              </div>

              <h3 className="text-xl font-semibold leading-7 tracking-tight text-foreground transition group-hover:text-accent">
                {post.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-6 text-muted">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-5 py-8 text-sm text-subtle">
      <p>© 2026 earlgrey02</p>
    </footer>
  )
}

export default Page
