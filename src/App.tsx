import { Typography, Container, Box } from '@mui/material'
import './App.css'
import { useTodoStorage } from './hooks/useTodoStorage'
import { useTodos } from './hooks/useTodos'
import { TodoInput } from './components/TodoInput/TodoInput'
import { TodoList } from './components/TodoList/TodoList'
import { ControlBar } from './components/ControlBar/ControlBar'

function App() {
  const [todos, setTodos] = useTodoStorage([])
  const {
    filteredTodos,
    filter,
    handleAdd,
    handleToggle,
    handleFilterChange,
    handleClearCompleted
  } = useTodos(todos, setTodos)

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
      <Typography
        variant="h1"
        sx={{
          my: '20px',
          color: '#fbb6bd',
          fontWeight: 100
        }}
      >
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
          <TodoList
            todos={filteredTodos}
            filter={filter}
            onToggle={handleToggle}
          />

          <ControlBar
            todos={todos}
            filter={filter}
            handleFilterChange={handleFilterChange}
            handleClearCompleted={handleClearCompleted}
          />
        </Box>
      </Container>
    </Box>
  )
}

export default App
