import store from '@/lib/redux/store'

declare global {
  type Store = ReturnType<typeof store.getState>
}
