import PostItem from '@/component/post/PostItem'
import type { Post } from '@/module/post/type'

interface Props {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostList
