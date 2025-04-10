import { render, screen } from '@testing-library/react'
import App from './App'

test('renders todo app', () => {
  render(<App />)
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i)
  expect(inputElement).toBeInTheDocument()
})
