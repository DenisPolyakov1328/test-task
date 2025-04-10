import { ListItem, Checkbox, Typography } from '@mui/material'

interface TodoItemProps {
  todo: {
    id: number
    text: string
    completed: boolean
  }
  onToggle: (id: number) => void
}

export const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <ListItem>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        inputProps={
          {
            'data-testid': 'toggle-checkbox'
          } as React.InputHTMLAttributes<HTMLInputElement>
        }
      />
      <Typography
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'text.disabled' : 'inherit'
        }}
      >
        {todo.text}
      </Typography>
    </ListItem>
  )
}
