import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostStates {
  tags: string[]
  page: number
}

const postSlice = createSlice({
  name: 'post',
  initialState: {
    tags: [],
    page: 0
  } as PostStates,
  reducers: {
    setTags: (state: PostStates, action: PayloadAction<string[]>) => ({
      ...state,
      tags: action.payload
    }),
    setPage: (state: PostStates, action: PayloadAction<number>) => ({
      ...state,
      page: action.payload
    })
  }
})

export const { setTags, setPage } = postSlice.actions
export default postSlice.reducer
