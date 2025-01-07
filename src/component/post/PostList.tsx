import type { Post } from 'contentlayer'
import type { Transition } from 'framer-motion'
import PostItem from '@/component/post/PostItem'
import Motion from '@/component/ui/Motion'
import { fadeInRight } from '@/lib/framer-motion/animations'

interface Props {
  posts: Post[]
  transition?: Transition
}

const PostList = ({ posts, transition }: Props) => {
  return (
    <Motion
      className="flex flex-col gap-6"
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.2,
        ...transition
      }}>
      {posts.map(post => (
        <Motion variants={fadeInRight} key={post.id}>
          <PostItem post={post} />
        </Motion>
      ))}
    </Motion>
  )
}

export default PostList
