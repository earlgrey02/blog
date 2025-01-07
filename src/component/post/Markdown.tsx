'use client'

import type { Post } from 'contentlayer'
import { useMDXComponent as useMdxComponent } from 'next-contentlayer/hooks'
import mdxComponents from '@/component/post/mdxComponents'

interface Props {
  post: Post
}

const Markdown = ({ post }: Props) => {
  const Component = useMdxComponent(post.body.code)

  return <Component components={mdxComponents(post.id)} />
}

export default Markdown
