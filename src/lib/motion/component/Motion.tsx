'use client'
import type { MotionProps } from 'framer-motion'
import { isValidMotionProp, motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

type Props<T extends ElementType> = ComponentPropsWithoutRef<T> & {
  as?: T
} & MotionProps

const Motion = <T extends ElementType>({ as, ...props }: Props<T>) => {
  const MotionedComponent = chakra(motion(as ?? 'div'), {
    shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
  })

  return <MotionedComponent {...props} />
}

export default Motion
