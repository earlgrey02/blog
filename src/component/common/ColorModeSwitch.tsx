'use client'

import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { ButtonProps } from '@/component/ui/Button'
import Button from '@/component/ui/Button'
import { Moon } from '@/component/ui/icons'
import { ColorMode } from '@/lib/shadcn-ui/enum'
import { cn } from '@/lib/shadcn-ui/util'

type Props = ButtonProps

const ColorModeSwitch = ({ className, ...props }: Props) => {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <Button
      className={cn('[&>svg]:size-6', className)}
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT)}
      {...props}>
      {theme === ColorMode.LIGHT ? <Moon /> : <Sun />}
    </Button>
  )
}

export default ColorModeSwitch
