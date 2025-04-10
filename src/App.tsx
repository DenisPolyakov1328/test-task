import { useState, useCallback } from 'react'
import { useTodoStorage } from './hooks/useTodoStorage'
import { Typography, Container } from '@mui/material'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoFilter } from './components/TodoFilter'
import { TodoList } from './components/TodoList'
import { FilterType } from './types/types'
import { Counter } from './components/Counter'
import { ClearButton } from './components/ClearButton'

function App() {
  const [todos, setTodos] = useTodoStorage([])
  const [filter, setFilter] = useState<FilterType>('all')

  const handleAdd = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const handleToggle = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }, [])

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter)
  }

  const hasCompletedTodos = todos.some((todo) => todo.completed)

  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
    setFilter('all')
  }

  return (
    <Container className="App">
      <Typography variant="h1" gutterBottom>
        todos
      </Typography>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} filter={filter} onToggle={handleToggle} />
      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <Counter todos={todos} />
      <ClearButton
        hasCompletedTodos={hasCompletedTodos}
        onClearCompleted={handleClearCompleted}
      />
    </Container>
  )
}

export default App
