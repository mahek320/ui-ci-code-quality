import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  expect(screen.getByText(/Hello, React/i)).toBeInTheDocument()
})
