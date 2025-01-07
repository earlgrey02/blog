'use client'

import type { Post } from 'contentlayer'
import { useMDXComponent as useMdxComponent } from 'next-contentlayer/hooks'

interface Props {
  post: Post
}

const Markdown = ({ post }: Props) => {
  const Component = useMdxComponent(post.body.code)

  return <Component />
}

export default Markdown
