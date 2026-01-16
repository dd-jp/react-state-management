import { Card, Display1, FlowLayout, Text } from '@salt-ds/core'
import { useGetCounterStore } from '../CounterContext'

export function CountDisplay() {
  const { count } = useGetCounterStore()

  return (
    <Card
      style={{
        padding: '2rem',
        textAlign: 'center',
        minWidth: '300px',
      }}
    >
      <FlowLayout direction="column" gap={2} align="center">
        <Text styleAs="h2" color="secondary">
          Current Count
        </Text>
        <Display1
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            color: count === 0 ? 'inherit' : count > 0 ? '#2e7d32' : '#d32f2f',
          }}
        >
          {count}
        </Display1>
        <Text color="secondary" style={{ fontSize: '0.875rem' }}>
          {count === 0 && 'Start counting!'}
          {count > 0 &&
            `${count} ${count === 1 ? 'click' : 'clicks'} above zero`}
          {count < 0 &&
            `${Math.abs(count)} ${Math.abs(count) === 1 ? 'click' : 'clicks'} below zero`}
        </Text>
      </FlowLayout>
    </Card>
  )
}
