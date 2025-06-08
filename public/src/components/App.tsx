import React, { useState } from 'react'
import UserCard from './components/UserCard'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>This is a sample paragraph</p>
      <p data-testid="count">Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {/* 👇 Add your UserCard component inside the JSX */}
      <UserCard name="Mahek Shetty" age={22} isActive={true} />
    </div>
  )
}

export default App



