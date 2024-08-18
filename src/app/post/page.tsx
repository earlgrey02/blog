'use client'
import Motion from '@/lib/motion/component/Motion'
import React, { memo, useMemo, useState } from 'react'
import { getPosts } from '@/module/post/api'
import { toPages } from '@/lib/util/pagination'
import { Flex, List, ListItem, Text } from '@chakra-ui/react'
import { fadeIn, fadeInRight } from '@/lib/motion/animations'
import PostItem from '@/component/PostItem'
import Paginator from '@/component/Paginator'
import useSelector from '@/lib/redux/hook/useSelector'

const Page = () => {
  const { tags, page } = useSelector(store => store.post)
  const [delayChildren, setDelayChildren] = useState(0.5)

  const pages = useMemo(
    () =>
      toPages(
        tags.length === 0
          ? getPosts()
          : getPosts().filter(post => tags.filter(tag => post.tags.includes(tag)).length === tags.length)
      ),
    [tags]
  )

  return (
    <Flex flexDirection="column" gap="2rem">
      <Title />
      <Motion
        as={List}
        minHeight={{
          base: '34rem',
          sm: '36rem'
        }}
        spacing="1.6rem"
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.2,
          delayChildren
        }}>
        {pages[page]?.map(post => (
          <Motion as={ListItem} variants={fadeInRight} key={post.id}>
            <PostItem post={post} />
          </Motion>
        )) ?? (
          <Motion
            initial={{
              opacity: 0,
              filter: 'blur(0.8px)'
            }}
            animate={{
              opacity: 1,
              filter: 'blur(0px)',
              transition: { duration: 1 }
            }}>
            일치하는 게시글이 없습니다.
          </Motion>
        )}
      </Motion>
      <Flex justifyContent="center" onClick={() => setDelayChildren(0)}>
        <Paginator total={pages.length} />
      </Flex>
    </Flex>
  )
}

const Title = memo(() => (
  <Motion
    as={Text}
    fontSize={{
      base: '1.5rem',
      sm: '1.8rem'
    }}
    fontWeight={800}
    variants={fadeIn}
    initial="initial"
    animate="animate"
    transition={{ duration: 1 }}>
    게시글
  </Motion>
))

export default Page
