import { Typography } from '@mui/material'
import { Todo } from './../types/types'

interface CounterProps {
  todos: Todo[]
}

export const Counter = ({ todos }: CounterProps) => {
  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <Typography
      variant="body1"
      sx={{ color: 'text.secondary', minWidth: '100px' }}
    >
      {activeCount} {activeCount === 1 ? 'item' : 'items'} left
    </Typography>
  )
}
