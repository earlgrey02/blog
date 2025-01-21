import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { Post } from 'contentlayer'
import { setFilter, setPage } from '@/lib/redux/reducer/postReducer'

interface FilterStates {
  filteredPosts: Post[]
  filterHandler: (tag: string) => void
}

const useFilter = (posts: Post[]): FilterStates => {
  const { filter } = useSelector(store => store.post)
  const dispatch = useDispatch()
  const filteredPosts = useMemo(
    () => posts.filter(post => !filter.tag || post.tags.includes(filter.tag)),
    [posts, filter]
  )
  const filterHandler = useCallback(
    (tag: string) => {
      dispatch(
        setFilter({
          ...filter,
          tag: filter.tag === tag ? undefined : tag
        })
      )
      dispatch(setPage(0))
    },
    [filter]
  )

  return { filteredPosts, filterHandler }
}

export default useFilter
