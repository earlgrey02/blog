import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface PostState {
  pageIndex: number
  filter: Filter
}

interface Filter {
  tag?: string
}

const { reducer, actions } = createSlice({
  name: 'post',
  initialState: {
    pageIndex: 0,
    filter: {}
  } as PostState,
  reducers: {
    setPage: (state: PostState, action: PayloadAction<number>) => ({
      ...state,
      pageIndex: action.payload
    }),
    setFilter: (state: PostState, action: PayloadAction<Filter>) => ({
      ...state,
      filter: action.payload
    })
  }
})

export const { setPage, setFilter } = actions
export default reducer
