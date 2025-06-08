import { render, screen } from '@testing-library/react'
import UserCard from './UserCard'

describe('UserCard Component', () => {
  test('renders name and active status', () => {
    render(<UserCard name="Mahek" isActive={true} />)
    expect(screen.getByText('Mahek')).toBeInTheDocument()
    expect(screen.getByText('Status: Active')).toBeInTheDocument()
  })

  test('renders inactive status', () => {
    render(<UserCard name="John" isActive={false} />)
    expect(screen.getByText('Status: Inactive')).toBeInTheDocument()
  })

  test('renders age if provided', () => {
    render(<UserCard name="Alex" age={30} isActive={true} />)
    expect(screen.getByText('Age: 30')).toBeInTheDocument()
  })

  test('does not render age if not provided', () => {
    render(<UserCard name="Sam" isActive={true} />)
    expect(screen.queryByText(/Age:/)).toBeNull()
  })

  test('renders with all props', () => {
    const { container } = render(<UserCard name="Test" age={40} isActive={false} />)
    expect(container).toBeTruthy()
  })
})
