import React from 'react'

const App: React.FC = () => {
  const unused = 123 // ESLint should warn (unused var)

  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>This is a sample paragraph</p> {/* missing semicolon */}
    </div>
  )
}

export default App
