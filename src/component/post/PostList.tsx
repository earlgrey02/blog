import type { Post } from 'contentlayer'
import type { HTMLMotionProps } from 'framer-motion'
import PostItem from '@/component/post/PostItem'
import Motion from '@/component/ui/Motion'
import { fadeInRight } from '@/lib/framer-motion/animations'

type Props = HTMLMotionProps<'div'> & { posts: Post[] }

const PostList = ({ posts, ...props }: Props) => {
  return (
    <Motion className="flex flex-col gap-6" initial="initial" animate="animate" {...props}>
      {posts.map(post => (
        <Motion layoutId={post.id} variants={fadeInRight} key={post.id}>
          <PostItem post={post} />
        </Motion>
      ))}
    </Motion>
  )
}

export default PostList
