'use client'

import { useSelector } from 'react-redux'
import { cn } from '@/lib/shadcn-ui/util'

interface Props {
  tag: string
}

const TagItem = ({ tag }: Props) => {
  const { tag: selectedTag } = useSelector(store => store.post.filter)

  return (
    <div
      className={cn(
        'rounded-sm bg-neutral-300/30 px-2 py-[0.35rem] text-[0.6rem] -tracking-tight text-neutral-600 dark:bg-neutral-700/50 dark:text-neutral-300 md:px-2.5 md:py-[0.4rem] md:text-[0.7rem] duration-300 cursor-pointer',
        tag === selectedTag && 'bg-neutral-400/30 text-black dark:bg-neutral-700 dark:text-white scale-[1.02]'
      )}>
      {tag}
    </div>
  )
}

export default TagItem
