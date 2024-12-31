import Link from 'next/link'
import TagItem from '@/component/post/TagItem'
import type { Post } from '@/module/post/type'

interface Props {
  post: Post
}

const PostItem = ({ post }: Props) => {
  const { id, frontmatter } = post
  const { title, description, tags, date } = frontmatter

  return (
    <Link href={`/post/${id}`}>
      <div className="flex flex-col gap-0.5 duration-300 hover:scale-[1.01] hover:cursor-pointer md:gap-1">
        <div className="text-[0.95rem] font-bold md:text-[1.2rem]">{title}</div>
        <div className="text-[0.75rem] text-neutral-500 dark:text-neutral-300 md:text-sm">{description}</div>
        <div className="my-1.5 flex gap-1.5">
          {tags.map(tag => (
            <TagItem tag={tag} key={tag} />
          ))}
        </div>
        <div className="text-[0.6rem] font-light -tracking-tight text-neutral-500 dark:text-neutral-400 md:text-[0.8rem]">
          {date.toISOString().split('T')[0]}
        </div>
      </div>
    </Link>
  )
}

export default PostItem
