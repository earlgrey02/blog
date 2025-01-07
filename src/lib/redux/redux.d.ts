import type { TypedUseSelectorHook } from 'react-redux'
import type store from '@/lib/redux/store'

declare module 'react-redux' {
  const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>
}
