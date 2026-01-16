import { Button, FlowLayout } from '@salt-ds/core'
import { useGetCounterApi } from '../CounterContext'

export function CountController() {
  const { increment, decrement, resetCount } = useGetCounterApi()

  return (
    <FlowLayout gap={2} justify="center" style={{ padding: '1rem' }}>
      <Button
        onClick={decrement}
        sentiment="negative"
        appearance="bordered"
        style={{ minWidth: '120px' }}
      >
        - Decrement
      </Button>
      <Button
        onClick={resetCount}
        appearance="transparent"
        style={{ minWidth: '120px' }}
      >
        Reset
      </Button>
      <Button
        onClick={increment}
        sentiment="positive"
        appearance="solid"
        style={{ minWidth: '120px' }}
      >
        + Increment
      </Button>
    </FlowLayout>
  )
}
