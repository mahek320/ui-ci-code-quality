import React, { useState } from 'react'

const App: React.FC = () => {
  const unusedVar = 42 // ESLint: unused variable
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)   // Prettier: extra space
  }

  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>Missing semicolon</p> {/* Prettier: not closed properly */}
      <button onClick={increment}>Increment</button>
      <p>Current count: {count}</p>
    </div>
  )
}

export default App
