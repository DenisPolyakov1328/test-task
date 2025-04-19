import { render, screen, fireEvent } from '@testing-library/react'
import { TodoInput } from './TodoInput'
import '@testing-library/jest-dom'

describe('TodoInput', () => {
  it('вызывает onAdd при нажатии Enter с введённым текстом', () => {
    const mockOnAdd = jest.fn()
    render(<TodoInput onAdd={mockOnAdd} />)

    const input = screen.getByPlaceholderText('What needs to be done?')

    fireEvent.change(input, { target: { value: 'Новая задача' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(mockOnAdd).toHaveBeenCalledWith('Новая задача')
  })

  it('вызывает onAdd при клике на иконку', () => {
    const mockOnAdd = jest.fn()
    render(<TodoInput onAdd={mockOnAdd} />)

    const input = screen.getByPlaceholderText('What needs to be done?')
    fireEvent.change(input, { target: { value: 'Ещё задача' } })

    const iconButton = screen.getByRole('button')
    fireEvent.click(iconButton)

    expect(mockOnAdd).toHaveBeenCalledWith('Ещё задача')
  })

  it('не вызывает onAdd для пустой строки', () => {
    const mockOnAdd = jest.fn()
    render(<TodoInput onAdd={mockOnAdd} />)

    const iconButton = screen.getByRole('button')
    fireEvent.click(iconButton)

    expect(mockOnAdd).not.toHaveBeenCalled()
  })
})
