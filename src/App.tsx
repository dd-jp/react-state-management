import { FlowLayout } from '@salt-ds/core'
import {
  CountController,
  CountDisplay,
  CounterStoreProvider,
} from './components'

export function App() {
  return (
    <CounterStoreProvider>
      <FlowLayout
        direction="column"
        gap={4}
        align="center"
        justify="center"
        style={{ minHeight: '100vh', padding: '2rem' }}
      >
        <CountDisplay />
        <CountController />
      </FlowLayout>
    </CounterStoreProvider>
  )
}
