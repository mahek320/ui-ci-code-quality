import React from 'react'
import UserCard from './UserCard'

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the User Dashboard</h1>
      <UserCard name="Mahek" isActive={true} age={25} />
    </div>
  )
}

export default App
