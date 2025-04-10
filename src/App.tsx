import { useState } from 'react'
import { Typography, Container } from '@mui/material'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'
import { Todo } from './types/types'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

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

  return (
    <Container className="App">
      <Typography variant="h1" gutterBottom>
        todos
      </Typography>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} filter={filter} onToggle={handleToggle} />
    </Container>
  )
}

export default App
