'use client'

import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, PaginationButton, PaginationContent, PaginationItem, PaginationNavigation } from '../ui/Pagination'
import { setPage } from '@/lib/redux/reducer/postReducer'

interface Props {
  totalPage: number
}

const maxPage = 5

const PostPaginator = ({ totalPage }: Props) => {
  const { pageIndex } = useSelector(store => store.post)
  const dispatch = useDispatch()
  const indexes = useMemo(() => {
    let start = Math.max(0, pageIndex - Math.floor(maxPage / 2))
    const end = Math.min(totalPage, start + maxPage)

    if (end - start < maxPage) start = Math.max(0, end - maxPage)

    return Array.from({ length: maxPage }, (_, index) => start + index)
  }, [totalPage, pageIndex])

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationNavigation
            className="size-9 md:size-10 [&_svg]:size-4 md:[&_svg]:size-5"
            direction="previous"
            disabled={pageIndex <= 0}
            onClick={() => dispatch(setPage(pageIndex - 1))}
          />
        </PaginationItem>
        {indexes.map(index => (
          <PaginationItem key={index}>
            <PaginationButton
              className="size-8 text-xs md:size-9 md:text-sm"
              isActive={index === pageIndex}
              onClick={() => dispatch(setPage(index))}>
              {index + 1}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNavigation
            className="size-8 md:size-10 [&_svg]:size-4 md:[&_svg]:size-5"
            direction="next"
            disabled={pageIndex >= totalPage - 1}
            onClick={() => dispatch(setPage(pageIndex + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PostPaginator
