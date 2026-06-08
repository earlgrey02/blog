'use client'

import ThemeToggle from '@/component/common/ThemeToggle'
import { GitHubIcon, HomeIcon } from '@/component/ui/icons'
import useHideOnScroll from '@/hook/useHideOnScroll'
import { cn } from '@/lib/tailwind/utils'
import Link from 'next/link'
import type { ComponentProps } from 'react'

const Header = () => {
  const { isHidden } = useHideOnScroll()

  return (
    <header
      className={cn(
        'sticky top-0 z-10 border-b border-border/70 bg-background/85 backdrop-blur transition-transform duration-300 ease-out',
        isHidden ? '-translate-y-full' : 'translate-y-0'
      )}>
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <IconLink href="/">
          <HomeIcon />
        </IconLink>
        <nav className="flex items-center gap-2 text-sm text-muted">
          <ThemeToggle />
          <IconLink href="https://github.com/earlgrey02">
            <GitHubIcon />
          </IconLink>
        </nav>
      </div>
    </header>
  )
}

const IconLink = ({ className, children, ...props }: ComponentProps<typeof Link>) => {
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

export default Header
