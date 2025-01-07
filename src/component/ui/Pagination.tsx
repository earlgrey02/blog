import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ButtonProps } from '@/component/ui/Button'
import Button from '@/component/ui/Button'
import { cn } from '@/lib/shadcn-ui/util'

type PaginationButtonProps = ButtonProps & { isActive?: boolean }

type PaginationNavigationProps = PaginationButtonProps & { direction: 'previous' | 'next' }

const Pagination = ({ className, ...props }: ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
)

const PaginationContent = forwardRef<HTMLUListElement, ComponentProps<'ul'>>(({ className, ...props }, ref) => (
  <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
))

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>((props, ref) => <li ref={ref} {...props} />)

const PaginationButton = ({ isActive, ...props }: PaginationButtonProps) => (
  <Button
    aria-current={isActive ? 'page' : undefined}
    variant={isActive ? 'secondary' : 'ghost'}
    size="icon"
    {...props}
  />
)

const PaginationNavigation = ({ direction, ...props }: PaginationNavigationProps) => (
  <PaginationButton aria-label={`Go to ${direction} page`} {...props}>
    {direction === 'previous' ? <ChevronLeft /> : <ChevronRight />}
  </PaginationButton>
)

export { Pagination, PaginationContent, PaginationButton, PaginationItem, PaginationNavigation }
