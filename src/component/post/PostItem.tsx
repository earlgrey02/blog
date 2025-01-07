import type { Post } from 'contentlayer'
import Link from 'next/link'
import TagItem from '@/component/post/TagItem'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="flex flex-col gap-0.5 duration-300 hover:scale-[1.01] hover:cursor-pointer md:gap-1">
        <div className="text-[0.95rem] font-bold md:text-[1.2rem]">{post.title}</div>
        <div className="text-[0.75rem] text-neutral-500 dark:text-neutral-300 md:text-sm">{post.description}</div>
        <div className="my-1.5 flex gap-1">
          {post.tags.map(tag => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
        <div className="text-[0.6rem] font-light -tracking-tight text-neutral-500 dark:text-neutral-400 md:text-[0.8rem]">
          {post.date.split('T')[0]}
        </div>
      </div>
    </Link>
  )
}

export default PostItem
