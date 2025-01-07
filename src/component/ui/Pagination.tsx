import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ButtonProps } from '@/component/ui/Button'
import Button from '@/component/ui/Button'
import { cn } from '@/lib/shadcn-ui/util'

type PaginationButtonProps = ButtonProps & { isActive?: boolean }

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

const PaginationItem = forwardRef<HTMLLIElement, ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('', className)} {...props} />
))

const PaginationButton = ({ isActive, ...props }: PaginationButtonProps) => (
  <Button
    aria-current={isActive ? 'page' : undefined}
    variant={isActive ? 'outline' : 'ghost'}
    size="icon"
    {...props}
  />
)

const PaginationPrevious = ({ className, ...props }: ComponentProps<typeof PaginationButton>) => (
  <PaginationButton
    aria-label="Go to previous page"
    size="default"
    className={cn('gap-1 pl-2.5', className)}
    {...props}>
    <ChevronLeft className="size-4" />
  </PaginationButton>
)

const PaginationNext = ({ className, ...props }: ComponentProps<typeof PaginationButton>) => (
  <PaginationButton aria-label="Go to next page" size="default" className={cn('gap-1 pr-2.5', className)} {...props}>
    <ChevronRight className="size-4" />
  </PaginationButton>
)

export { Pagination, PaginationContent, PaginationButton, PaginationItem, PaginationPrevious, PaginationNext }
