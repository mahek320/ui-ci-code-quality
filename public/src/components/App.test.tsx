import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the heading', () => {
  render(<App />)
  expect(screen.getByText(/Hello, React/i)).toBeInTheDocument()
})

test('renders the paragraph', () => {
  render(<App />)
  expect(screen.getByText(/Missing semicolon/i)).toBeInTheDocument()
})
