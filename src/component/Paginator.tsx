import React, { useCallback } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '@/lib/redux/reducer/postSlice'
import { ArrowIcon } from '@/lib/chakra/component/icons'

interface Props {
  total: number
}

const maxPageNumbers = 5

const Paginator = ({ total }: Props) => {
  const page = useSelector((store: Store) => store.post.page)
  const dispatch = useDispatch()

  const paginationHandler = useCallback((page: number) => {
    if (page >= 0 && page < total) dispatch(setPage(page))
  }, [])

  const renderPageIndexes = useCallback(() => {
    let start = Math.max(0, page - Math.floor(maxPageNumbers / 2))
    let end = Math.min(total, start + maxPageNumbers)

    if (end - start < maxPageNumbers) start = Math.max(0, end - maxPageNumbers)

    return Array.from(
      { length: maxPageNumbers },
      (_, index) => start + index
    ).map(index => (
      <Button
        size="sm"
        key={index}
        onClick={() => paginationHandler(index)}
        variant={index === page ? 'solid' : 'ghost'}>
        {index + 1}
      </Button>
    ))
  }, [page])

  return (
    <Flex alignItems="center" gap="0.4rem">
      <Button
        padding={0}
        isDisabled={page === 0}
        onClick={() => paginationHandler(page - 1)}>
        <ArrowIcon />
      </Button>
      {renderPageIndexes()}
      <Button
        padding={0}
        isDisabled={page === total - 1}
        onClick={() => paginationHandler(page + 1)}>
        <ArrowIcon transform="rotate(180deg)" />
      </Button>
    </Flex>
  )
}

export default Paginator
