import { createContext } from 'react'
import type { CounterApi } from './use-create-counter-context.ts'

export const CounterApiContext = createContext<CounterApi | undefined>(
  undefined
)
