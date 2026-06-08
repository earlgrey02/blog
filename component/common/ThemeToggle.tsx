'use client'

import { useCallback } from 'react'
import { MoonIcon, SunIcon } from '@/component/ui/icons'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { resolvedTheme: theme, setTheme } = useTheme()
  const handleToggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  return (
    <button
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground transition hover:bg-accent-soft hover:text-accent-strong [&>svg]:size-6"
      type="button"
      onClick={handleToggle}>
      <MoonIcon className="dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  )
}

export default ThemeToggle
