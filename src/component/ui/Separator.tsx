'use client'

import type { ComponentPropsWithoutRef, ComponentRef } from 'react'
import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-separator'
import { cn } from '@/lib/shadcn-ui/util'

const Separator = forwardRef<ComponentRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(
  ({ className, orientation = 'horizontal', decorative = true, ...props }, ref) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[0.08rem] w-full' : 'h-full w-[0.08rem]',
        className
      )}
      {...props}
    />
  )
)

export default Separator
