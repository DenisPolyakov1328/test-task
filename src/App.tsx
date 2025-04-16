import { useState, useCallback } from 'react'
import { useTodoStorage } from './hooks/useTodoStorage'
import { Typography, Container, Box } from '@mui/material'
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

  return (
    <Box
      sx={{
        backgroundColor: '#e2e2e2',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h1" sx={{ my: '20px' }}>
        todos
      </Typography>
      <Container
        className="App"
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          px: 2
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            height: '100%',
            mb: '20px',
            boxShadow: 3
          }}
        >
          <TodoInput onAdd={handleAdd} />
          <TodoList todos={todos} filter={filter} onToggle={handleToggle} />

          <Box
            sx={{
              mt: 'auto',
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Counter todos={todos} />
            <TodoFilter
              currentFilter={filter}
              onFilterChange={handleFilterChange}
            />
            <ClearButton onClearCompleted={handleClearCompleted}>
              Clear completed
            </ClearButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default App
