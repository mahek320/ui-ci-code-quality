import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  expect(screen.getByText(/Hello, React/i)).toBeInTheDocument()
})

test('increments counter on button click', () => {
  render(<App />)
  const button = screen.getByText(/Increment/i)
  fireEvent.click(button)
  expect(screen.getByText(/Current count: 1/)).toBeInTheDocument()
})
