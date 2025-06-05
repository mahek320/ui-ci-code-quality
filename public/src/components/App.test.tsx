import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  expect(screen.getByText(/Hello, React/i)).toBeInTheDocument();
});

test('clicking button increments counter', () => {
  render(<App />);
  const button = screen.getByText('Click me');
  fireEvent.click(button);
  expect(screen.getByText(/Click count: 1/i)).toBeInTheDocument();
});
