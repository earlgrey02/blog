'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface HideOnScrollStates {
  isHidden: boolean
}

const SCROLL_DELTA_THRESHOLD = 5
const VISIBLE_HEIGHT = 20
const HIDDEN_HEIGHT = 80

const useHideOnScroll = (): HideOnScrollStates => {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollY = useRef(0)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    const scrollDelta = currentScrollY - lastScrollY.current

    if (currentScrollY <= VISIBLE_HEIGHT) {
      setIsHidden(false)
    } else if (Math.abs(scrollDelta) > SCROLL_DELTA_THRESHOLD) {
      setIsHidden(scrollDelta > 0 && currentScrollY > HIDDEN_HEIGHT)
    }

    lastScrollY.current = currentScrollY
  }, [])

  useEffect(() => {
    lastScrollY.current = window.scrollY

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return { isHidden }
}

export default useHideOnScroll
