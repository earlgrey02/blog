'use client'

import * as mdxComponents from '@/lib/mdx/mdxComponents'
import { useMDXComponent as useMdxComponent } from 'next-contentlayer2/hooks'

interface Props {
  code: string
}

const PostContent = ({ code }: Props) => {
  const MdxComponent = useMdxComponent(code)

  // eslint-disable-next-line react-hooks/static-components
  return <MdxComponent components={mdxComponents} />
}

export default PostContent
