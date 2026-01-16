import { type PropsWithChildren } from 'react'
import { CounterApiContext } from './CounterApiContext.tsx'
import { useCreateCounterContext } from './use-create-counter-context.ts'
import { CounterStoreContext } from './CounterStoreContext.tsx'

export function CounterStoreProvider({ children }: PropsWithChildren<unknown>) {
  const { counterApi, counterState } = useCreateCounterContext()

  return (
    <CounterApiContext.Provider value={counterApi}>
      <CounterStoreContext.Provider value={counterState}>
        {children}
      </CounterStoreContext.Provider>
    </CounterApiContext.Provider>
  )
}
