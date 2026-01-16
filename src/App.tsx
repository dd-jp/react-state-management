import { StackLayout } from '@salt-ds/core'
import {
  CountController,
  CountDisplay,
  CounterStoreProvider,
} from './components'

export function App() {
  return (
    <CounterStoreProvider>
      <StackLayout
        direction="column"
        gap={4}
        align="center"
        style={{ minHeight: '100vh', padding: '2rem' }}
      >
        <CountDisplay />
        <CountController />
      </StackLayout>
    </CounterStoreProvider>
  )
}
