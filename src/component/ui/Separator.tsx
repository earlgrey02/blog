'use client'

import type { ComponentPropsWithoutRef, ComponentRef, ForwardedRef } from 'react'
import { forwardRef } from 'react'
import { Root } from '@radix-ui/react-separator'
import { cn } from '@/lib/shadcn-ui/util'

type SeparatorProps = ComponentPropsWithoutRef<typeof Root>

const Separator = forwardRef(
  (
    { className, orientation = 'horizontal', decorative = true, ...props }: SeparatorProps,
    ref: ForwardedRef<ComponentRef<typeof Root>>
  ) => (
    <Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className
      )}
      {...props}
    />
  )
)

export type { SeparatorProps }
export default Separator
