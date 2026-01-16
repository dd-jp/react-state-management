import { useContext } from 'react'
import { CounterStoreContext } from './CounterStoreContext.tsx'

export function useGetCounterStore() {
  const context = useContext(CounterStoreContext)

  if (!context) {
    throw new Error(
      'useGetCounterApi must be used within a CounterStoreProvider'
    )
  }

  return context
}
