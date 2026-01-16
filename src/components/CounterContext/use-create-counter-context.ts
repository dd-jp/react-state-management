import { useState, useMemo } from 'react'

export interface CounterState {
  count: number
}

const INITIAL_STATE: CounterState = { count: 0 }

export function useCreateCounterContext() {
  const [counterState, setCounterState] = useState(INITIAL_STATE)

  const counterApi = useMemo(() => {
    function increment() {
      setCounterState((prev) => ({ ...prev, count: prev.count + 1 }))
    }

    function decrement() {
      setCounterState((prev) => ({ ...prev, count: prev.count - 1 }))
    }

    function resetCount() {
      setCounterState((prev) => ({ ...prev, count: 0 }))
    }

    return {
      increment,
      decrement,
      resetCount,
    }
  }, [])

  return {
    counterState,
    counterApi,
  }
}

export type CounterApi = ReturnType<
  typeof useCreateCounterContext
>['counterApi']
