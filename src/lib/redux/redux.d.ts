import type store from '@/lib/redux/store'
import type { TypedUseSelectorHook } from 'react-redux'

declare module 'react-redux' {
  const useSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>>
}
