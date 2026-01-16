import { useState } from 'react'
import { Button, Card, FlowLayout, H1, StackLayout, Text } from '@salt-ds/core'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <FlowLayout style={{ padding: '2rem', minHeight: '100vh' }}>
      <StackLayout gap={3} align="center">
        <H1>React State Management with Vite + Salt DS</H1>
        <Card style={{ padding: '2rem' }}>
          <StackLayout gap={2} align="center">
            <Text>Click the button to increment the counter:</Text>
            <Button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </Button>
            <Text styleAs="label">
              Edit <code>src/App.tsx</code> and save to test HMR
            </Text>
          </StackLayout>
        </Card>
        <Text styleAs="label">
          This application uses Vite as the build tool and Salt DS as the component library
        </Text>
      </StackLayout>
    </FlowLayout>
  )
}

export default App
