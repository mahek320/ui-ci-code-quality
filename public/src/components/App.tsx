import React, { useState } from 'react'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>This is a sample paragraph</p>
      <p data-testid="count">Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default App

