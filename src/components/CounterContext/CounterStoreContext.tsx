import { createContext } from 'react'
import type { CounterState } from './use-create-counter-context.ts'

export const CounterStoreContext = createContext<CounterState | undefined>(
  undefined
)
