import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { TodoItem } from './TodoItem'

describe('TodoItem component', () => {
  const mockTodo = {
    id: 1,
    text: 'Test task',
    completed: false
  }

  it('should call onToggle when checkbox is clicked', async () => {
    const mockToggle = jest.fn()
    const user = userEvent.setup()

    render(<TodoItem todo={mockTodo} onToggle={mockToggle} />)

    const checkboxInput = screen.getByTestId('toggle-checkbox')
    await user.click(checkboxInput)

    expect(mockToggle).toHaveBeenCalledTimes(1)
    expect(mockToggle).toHaveBeenCalledWith(mockTodo.id)
  })
})
