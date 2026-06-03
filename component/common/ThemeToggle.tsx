'use client'

import { MoonIcon, SunIcon } from '@/component/ui/icons'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <button
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground transition hover:bg-accent-soft hover:text-accent-strong [&>svg]:size-6"
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeToggle
