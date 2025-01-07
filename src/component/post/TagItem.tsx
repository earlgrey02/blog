interface Props {
  tag: string
}

const TagItem = ({ tag }: Props) => {
  return (
    <div className="rounded-sm bg-neutral-300/30 px-2 py-[0.35rem] text-[0.6rem] font-light dark:bg-neutral-700/50 md:px-2.5 md:py-[0.4rem] md:text-[0.7rem]">
      {tag}
    </div>
  )
}

export default TagItem
