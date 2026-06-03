import { cn } from '@/lib/tailwind/utils'
import Link from 'next/link'
import type { ComponentProps } from 'react'

type Props = ComponentProps<typeof Link>

const IconLink = ({ className, children, ...props }: Props) => {
  return (
    <Link
      className={cn(
        'inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground transition hover:bg-accent-soft hover:text-accent-strong [&>svg]:size-6',
        className
      )}
      {...props}>
      {children}
    </Link>
  )
}

export default IconLink
