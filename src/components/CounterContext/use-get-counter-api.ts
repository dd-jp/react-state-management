import { useContext } from 'react'
import { CounterApiContext } from './CounterApiContext.tsx'

export function useGetCounterApi() {
  const context = useContext(CounterApiContext)

  if (!context) {
    throw new Error(
      'useGetCounterApi must be used within a CounterStoreProvider'
    )
  }

  return context
}
