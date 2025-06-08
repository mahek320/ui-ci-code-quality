import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders welcome text', () => {
    render(<App />)
    expect(screen.getByText(/welcome to the user dashboard/i)).toBeInTheDocument()
  })

  test('renders user card inside app', () => {
    render(<App />)
    expect(screen.getByText('Mahek')).toBeInTheDocument()
    expect(screen.getByText('Status: Active')).toBeInTheDocument()
    expect(screen.getByText('Age: 25')).toBeInTheDocument()
  })
})
