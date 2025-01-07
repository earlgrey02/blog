import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Separator from '@/component/ui/Separator'
import type { MdxComponents } from '@/lib/contentlayer/contentlayer'

const mdxComponents = (id: string): MdxComponents => ({
  p: ({ children }) => (
    <span className="break-keep text-[0.8rem] leading-loose text-neutral-600 dark:text-neutral-300 md:text-[0.9rem]">
      {children}
    </span>
  ),
  h1: ({ children }) => (
    <div className="mb-2 mt-6 flex flex-col gap-1.5 md:mb-4 md:mt-10 md:gap-2">
      <h1 className="text-lg font-bold text-black dark:text-white md:text-[1.35rem]">{children}</h1>
      <Separator />
    </div>
  ),
  h2: ({ children }) => (
    <h2 className="-ml-2 mb-1.5 mt-4 flex items-center text-[1rem] font-bold text-neutral-700 dark:text-neutral-200 md:text-lg">
      <Dot />
      {children}
    </h2>
  ),
  img: ({ src, alt }) => (
    <div className="relative my-5 aspect-video">
      <Image
        className="object-contain"
        src={`/post/${id}/${src}`}
        alt={alt ?? 'unnamed image'}
        fill
        sizes="
            (min-width: 768px) 50vw,
            90vw
          "
      />
    </div>
  ),
  a: ({ href, children }) => (
    <Link
      href={href!}
      className="border-b-[0.05rem] border-b-black/50 text-black dark:border-b-white/50 dark:text-white"
      target="_blank">
      {children}
    </Link>
  )
})

export default mdxComponents
