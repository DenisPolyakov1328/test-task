import { useState, useCallback } from 'react'
import { Todo, FilterType } from '../types/types'

export const useTodos = (todos: Todo[], setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  const [filter, setFilter] = useState<FilterType>('all')

  const handleAdd = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const handleToggle = useCallback(
    (id: number) => {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )
    },
    [setTodos]
  )

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter)
  }

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
    setFilter('all')
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return {
    filteredTodos,
    filter,
    handleAdd,
    handleToggle,
    handleFilterChange,
    handleClearCompleted
  }
}