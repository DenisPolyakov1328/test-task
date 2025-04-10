import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TodoFilter } from './TodoFilter'
import '@testing-library/jest-dom'

describe('TodoFilter', () => {
  it('корректно вызывает onFilterChange при переключении фильтра', async () => {
    const mockOnFilterChange = jest.fn()
    const user = userEvent.setup()

    render(
      <TodoFilter currentFilter="all" onFilterChange={mockOnFilterChange} />
    )

    const activeButton = screen.getByText('Active')
    await user.click(activeButton)
    expect(mockOnFilterChange).toHaveBeenCalledWith('active')
  })
})
