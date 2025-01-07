import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Introduction from '@/component/home/Introduction'
import PostList from '@/component/post/PostList'
import Button from '@/component/ui/Button'
import Motion from '@/component/ui/Motion'
import Separator from '@/component/ui/Separator'
import { getPostsOrderByDate } from '@/lib/contentlayer/util'
import { fadeIn } from '@/lib/framer-motion/animations'

const Page = () => {
  const posts = getPostsOrderByDate()

  return (
    <Motion
      className="flex flex-col gap-6 md:gap-8"
      initial="initial"
      animate="animate"
      transition={{ staggerChildren: 0.5 }}>
      <Motion variants={fadeIn} transition={{ duration: 1 }}>
        <Introduction />
      </Motion>
      <Motion className="flex flex-col gap-3 md:gap-5" variants={fadeIn} transition={{ duration: 1 }}>
        <Separator />
        <div className="flex items-center justify-between">
          <div className="text-[1rem] font-bold md:text-[1.2rem]">최근 게시글</div>
          <Link href="/post">
            <Button
              variant="ghost"
              className="flex items-center gap-1 px-1.5 text-[0.7rem] text-neutral-500 dark:text-neutral-400 md:px-3 md:text-sm">
              <div className="font-light">모든 게시글 보기</div>
              <ChevronRight className="size-3 stroke-1 md:size-4" />
            </Button>
          </Link>
        </div>
      </Motion>
      <PostList
        posts={posts.slice(0, 3)}
        transition={{
          staggerChildren: 0.2,
          delayChildren: 0.8
        }}
      />
    </Motion>
  )
}

export default Page
