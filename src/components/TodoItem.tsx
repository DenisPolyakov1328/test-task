import React from 'react'
import { ListItem, Checkbox, Typography } from '@mui/material'
import { Todo } from './../types/types'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
}

export const TodoItem = React.memo(({ todo, onToggle }: TodoItemProps) => {
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
})
