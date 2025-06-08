import React from 'react'
import UserCard from './UserCard'

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <UserCard name="Mahek" age={25} isActive={true} />
    </div>
  )
}

export default App
