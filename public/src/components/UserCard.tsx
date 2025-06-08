import React from 'react'

interface UserCardProps {
  name: string
  age?: number
  isActive: boolean
}

const UserCard: React.FC<UserCardProps> = ({ name, age, isActive }) => {
  return (
    <div data-testid="user-card" style={{ border: '1px solid gray', padding: '1rem' }}>
      <h2>{name}</h2>
      {age && <p>Age: {age}</p>}
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  )
}

export default UserCard
