'use client'

import type { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode } from 'react'
import { forwardRef } from 'react'
import type { MotionProps } from 'framer-motion'
import { motion } from 'framer-motion'

type Props<T extends ElementType> = ComponentPropsWithoutRef<T> & MotionProps & { as?: T }

type DynamicForwardedRef<T extends ElementType> = ForwardedRef<
  T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : T
>

const Motion = forwardRef(<T extends ElementType>({ as, ...props }: Props<T>, ref: DynamicForwardedRef<T>) => {
  const Component = motion.create(as ?? 'div')

  return <Component ref={ref} {...props} />
}) satisfies <T extends ElementType = 'div'>(props: Props<T> & { ref?: DynamicForwardedRef<T> }) => ReactNode

export default Motion
