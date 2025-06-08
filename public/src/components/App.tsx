import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders the dashboard heading', () => {
    render(<App />)
    expect(screen.getByText(/Welcome to the User Dashboard/i)).toBeInTheDocument()
  })

  test('renders UserCard with correct props', () => {
    render(<App />)
    
    // Check for name
    expect(screen.getByText('Mahek')).toBeInTheDocument()

    // Check for status
    expect(screen.getByText('Status: Active')).toBeInTheDocument()

    // Check for age
    expect(screen.getByText('Age: 25')).toBeInTheDocument()
  })
})
