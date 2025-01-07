import { configureStore } from '@reduxjs/toolkit'
import postReducer from '@/lib/redux/reducer/postReducer'

const store = configureStore({
  reducer: {
    post: postReducer
  }
})

export default store
