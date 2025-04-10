import { useState } from 'react'
import { Typography, Container } from '@mui/material'
import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoItem } from './components/TodoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

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
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={handleToggle} />
      ))}
    </Container>
  )
}

export default App
