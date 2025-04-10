import { useState } from 'react'
import { Typography } from '@mui/material'
import './App.css'
import { TodoInput } from './components/TodoInput'

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
  return (
    <div className="App">
      <Typography variant="h1" gutterBottom>
        todos
      </Typography>
      <TodoInput onAdd={handleAdd} />
    </div>
  )
}

export default App
