import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'
import type store from '../store.ts'

export default useSelector as TypedUseSelectorHook<ReturnType<typeof store.getState>>
