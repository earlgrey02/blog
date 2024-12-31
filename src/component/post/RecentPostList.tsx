import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import PostList from '@/component/post/PostList'
import Button from '@/component/ui/Button'
import { getPosts } from '@/module/post/api'

const RecentPostList = () => {
  const posts = getPosts().slice(0, 4)

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center justify-between">
        <div className="text-[1rem] font-bold md:text-[1.2rem]">최근 게시글</div>
        <Link href="/post">
          <Button
            variant="ghost"
            className="flex items-center gap-1 px-1 text-[0.7rem] text-neutral-500 dark:text-neutral-400 md:px-3 md:text-sm">
            <div className="font-light">모든 게시글 보기</div>
            <ChevronRight className="stroke-1" />
          </Button>
        </Link>
      </div>
      <div>
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export default RecentPostList
