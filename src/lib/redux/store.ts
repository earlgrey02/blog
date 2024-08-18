import { configureStore } from '@reduxjs/toolkit'
import postReducer from '@/lib/redux/reducer/postSlice'

const store = configureStore({
  reducer: {
    post: postReducer
  }
})

export default store
