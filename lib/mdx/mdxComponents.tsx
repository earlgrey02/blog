import { cn } from '@/lib/tailwind/utils'
import Image from 'next/image'
import type { ComponentProps } from 'react'

const H1 = (props: ComponentProps<'h1'>) =>
  <h1
    className="mt-10 border-t border-border pt-8 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
    {...props}
  />

const H2 = (props: ComponentProps<'h2'>) =>
  <h2 className="mt-9 text-lg font-semibold tracking-tight text-foreground md:mt-10 md:text-xl" {...props} />

const H3 = (props: ComponentProps<'h3'>) =>
  <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground md:mt-9 md:text-xl" {...props} />

const P = (props: ComponentProps<'p'>) =>
  <p className="mt-4 text-[0.9rem] leading-7 text-foreground md:mt-5 md:text-[0.96rem] md:leading-8" {...props} />

const A = (props: ComponentProps<'a'>) =>
  <a className="font-medium text-accent underline-offset-4 hover:text-accent-strong hover:underline" {...props} />

const Strong = (props: ComponentProps<'strong'>) => <strong className="font-semibold text-foreground" {...props} />

const Ul = (props: ComponentProps<'ul'>) =>
  <ul
    className="mt-4 list-disc space-y-1.5 pl-5 text-[0.9rem] leading-7 text-foreground marker:text-accent md:mt-5 md:space-y-2 md:pl-6 md:text-[0.96rem] md:leading-8"
    {...props}
  />

const Ol = (props: ComponentProps<'ol'>) =>
  <ol
    className="mt-4 list-decimal space-y-1.5 pl-5 text-[0.9rem] leading-7 text-foreground marker:text-accent md:mt-5 md:space-y-2 md:pl-6 md:text-[0.96rem] md:leading-8"
    {...props}
  />

const Li = (props: ComponentProps<'li'>) => <li className="pl-1" {...props} />

const Blockquote = (props: ComponentProps<'blockquote'>) =>
  <blockquote
    className="relative mt-6 rounded-lg border border-border bg-surface px-4 py-4 text-sm leading-7 text-muted shadow-card before:mb-2 before:block before:text-2xl before:font-semibold before:leading-none before:text-accent before:content-['“'] md:mt-7 md:px-5 md:py-5 md:text-base md:leading-8"
    {...props}
  />

const Hr = (props: ComponentProps<'hr'>) => <hr className="my-10 border-border md:my-12" {...props} />

const Img = ({ alt, ...props }: ComponentProps<typeof Image>) => {
  return (
    <Image
      alt={alt ?? ''}
      className="mt-6 h-auto w-full rounded-lg border border-border bg-surface-strong shadow-card md:mt-7"
      width={1200}
      height={675}
      sizes="(max-width: 768px) 100vw, 768px"
      {...props}
    />
  )
}

const Code = (props: ComponentProps<'code'>) =>
  <code
    className={cn(
      '[font-family:var(--font-code)]',
      'data-language' in props
        ? 'grid text-[0.72rem] leading-5 md:text-[0.78rem] md:leading-6'
        : 'mx-0.5 rounded bg-accent-soft px-1.5 py-[0.25em] text-[0.76em] font-medium text-accent-strong md:px-2 md:py-[0.3em] md:text-[0.8em]'
    )}
    {...props}
  />

export {
  A as a,
  Blockquote as blockquote,
  Code as code,
  H1 as h1,
  H2 as h2,
  H3 as h3,
  Hr as hr,
  Img as img,
  Li as li,
  Ol as ol,
  P as p,
  Strong as strong,
  Ul as ul
}
