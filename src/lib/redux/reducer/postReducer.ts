import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

interface PostState {
  pageIndex: number
}

const { reducer, actions } = createSlice({
  name: 'post',
  initialState: { pageIndex: 0 } satisfies PostState,
  reducers: {
    setPage: (state: PostState, action: PayloadAction<number>) => ({
      ...state,
      pageIndex: action.payload
    })
  }
})

export const { setPage } = actions
export default reducer
