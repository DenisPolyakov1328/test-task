import { useState } from 'react'
import { Typography, Container } from '@mui/material'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoFilter } from './components/TodoFilter'
import { TodoList } from './components/TodoList'
import { Todo, FilterType } from './types/types'
import { Counter } from './components/Counter'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<FilterType>('all')

  const handleAdd = (text: string) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter)
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
    </Container>
  )
}

export default App
