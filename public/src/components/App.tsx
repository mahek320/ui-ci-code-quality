import React from 'react'

const App: React.FC = () => {
  const unusedVar = 42 // ESLint: unused variable
  return (
    <div className="App">
      <h1>Hello, React + TypeScript!</h1>
      <p>Missing semicolon</p> {/* Prettier: formatting issue */}
    </div>
  )
}

export default App


