'use client'

import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import type { Post } from 'contentlayer'
import PostList from '@/component/post/PostList'
import PostPaginator from '@/component/post/PostPaginator'
import TagItem from '@/component/post/TagItem'
import Motion from '@/component/ui/Motion'
import useFilter from '@/lib/contentlayer/hook/useFilter'
import { getPosts, getPostsOrderByDate } from '@/lib/contentlayer/util'
import { fadeIn } from '@/lib/framer-motion/animations'

const Page = () => {
  const pageIndex = useSelector(store => store.post.pageIndex)
  const [delayChildren, setDelayChildren] = useState(0.5)
  const { filteredPosts: posts, filterHandler } = useFilter(getPostsOrderByDate())
  const tags = useMemo(
    () => [
      ...new Set(
        getPosts()
          .map(post => post.tags)
          .flat()
      )
    ],
    []
  )
  const pages = useMemo(
    () =>
      posts.reduce<Post[][]>((pages, post, index) => {
        const pageIndex = Math.floor(index / 4)

        if (!pages[pageIndex]) pages[pageIndex] = []
        pages[pageIndex].push(post)

        return pages
      }, []),
    [posts]
  )

  return (
    <Motion className="flex flex-col gap-9" initial="initial" animate="animate" transition={{ staggerChildren: 0.4 }}>
      <div className="flex flex-col gap-4">
        <Motion
          className="text-[1.3rem] font-extrabold md:text-[1.7rem]"
          variants={fadeIn}
          transition={{ duration: 0.8 }}>
          게시글
        </Motion>
        <Motion className="flex flex-wrap gap-1.5" variants={fadeIn} transition={{ duration: 0.8 }}>
          {tags.map(tag => (
            <div className="duration-300 hover:scale-[1.04]" onClick={() => filterHandler(tag)} key={tag}>
              <TagItem tag={tag} />
            </div>
          ))}
        </Motion>
      </div>
      <div className="min-h-[36rem]">
        <PostList
          posts={pages[pageIndex]}
          key={pageIndex}
          transition={{
            staggerChildren: 0.2,
            delayChildren
          }}
        />
      </div>
      <Motion variants={fadeIn} transition={{ duration: 1 }} onClick={() => setDelayChildren(0)}>
        <PostPaginator totalPage={pages.length} />
      </Motion>
    </Motion>
  )
}

export default Page
