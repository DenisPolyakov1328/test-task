import { Typography } from '@mui/material'
import { Todo } from './../types/types'

interface CounterProps {
  todos: Todo[]
}

export const Counter = ({ todos }: CounterProps) => {
  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <Typography variant="body1" sx={{ padding: '8px 0' }}>
      {activeCount} {activeCount === 1 ? 'item' : 'items'} left
    </Typography>
  )
}
