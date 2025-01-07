'use client'

import { useMemo, useState } from 'react'
import type { Post } from 'contentlayer'
import { useSelector } from 'react-redux'
import PostList from '@/component/post/PostList'
import PostPaginator from '@/component/post/PostPaginator'
import Motion from '@/component/ui/Motion'
import { getPostsOrderByDate } from '@/lib/contentlayer/util'
import { fadeIn } from '@/lib/framer-motion/animations'

const Page = () => {
  const { pageIndex } = useSelector(store => store.post)
  const [delayChildren, setDelayChildren] = useState(0.5)
  const posts = useMemo(getPostsOrderByDate, [])
  const pages = posts.reduce<Post[][]>((pages, post, index) => {
    const pageIndex = Math.floor(index / 4)

    if (!pages[pageIndex]) pages[pageIndex] = []
    pages[pageIndex].push(post)

    return pages
  }, [])

  return (
    <Motion
      className="flex flex-col gap-9"
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.8
      }}>
      <Motion className="text-[1.3rem] font-extrabold md:text-[1.7rem]" variants={fadeIn} transition={{ duration: 1 }}>
        게시글
      </Motion>
      <PostList
        posts={pages[pageIndex]}
        key={pageIndex}
        transition={{
          staggerChildren: 0.2,
          delayChildren
        }}
      />
      <Motion variants={fadeIn} transition={{ duration: 1 }} onClick={() => setDelayChildren(0)}>
        <PostPaginator totalPage={pages.length} />
      </Motion>
    </Motion>
  )
}

export default Page
