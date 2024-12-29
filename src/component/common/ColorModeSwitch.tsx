'use client'

import { Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import type { ButtonProps } from '@/component/ui/Button'
import Button from '@/component/ui/Button'
import { ColorMode } from '@/lib/shadcn-ui/enum'

type Props = ButtonProps

const ColorModeSwitch = ({ ...props }: Props) => {
  const { resolvedTheme: theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === ColorMode.LIGHT ? ColorMode.DARK : ColorMode.LIGHT)}
      {...props}>
      {theme === ColorMode.LIGHT ? <Moon /> : <Sun />}
    </Button>
  )
}

export default ColorModeSwitch
