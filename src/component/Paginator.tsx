import { useCallback } from 'react'
import { Button, Flex } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { setPage } from '@/lib/redux/reducer/postSlice'
import { ArrowIcon } from '@/lib/chakra/component/icons'
import useSelector from '@/lib/redux/hook/useSelector'

interface Props {
  total: number
}

const maxPageNumber = 5

const Paginator = ({ total }: Props) => {
  const page = useSelector(store => store.post.page)
  const dispatch = useDispatch()

  const paginationHandler = useCallback((page: number) => {
    if (page >= 0 && page < total) dispatch(setPage(page))
  }, [])

  const renderPageIndexes = useCallback(() => {
    let start = Math.max(0, page - Math.floor(maxPageNumber / 2))
    const end = Math.min(total, start + maxPageNumber)

    if (end - start < maxPageNumber) start = Math.max(0, end - maxPageNumber)

    return Array.from({ length: maxPageNumber }, (_, index) => start + index).map(index => (
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
      <Button padding={0} isDisabled={page === 0} onClick={() => paginationHandler(page - 1)}>
        <ArrowIcon />
      </Button>
      {renderPageIndexes()}
      <Button padding={0} isDisabled={page === total - 1} onClick={() => paginationHandler(page + 1)}>
        <ArrowIcon transform="rotate(180deg)" />
      </Button>
    </Flex>
  )
}

export default Paginator
