import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders heading', () => {
    render(<App />)
    expect(screen.getByText(/Hello, React/i)).toBeInTheDocument()
  })

  test('renders paragraph', () => {
    render(<App />)
    expect(screen.getByText(/sample paragraph/i)).toBeInTheDocument()
  })

  test('renders counter and button', () => {
    render(<App />)
    expect(screen.getByTestId('count')).toHaveTextContent('Clicked 0 times')
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  test('increments counter on click', () => {
    render(<App />)
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(screen.getByTestId('count')).toHaveTextContent('Clicked 1 times')
    fireEvent.click(button)
    expect(screen.getByTestId('count')).toHaveTextContent('Clicked 2 times')
  })
})
