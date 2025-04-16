import React from 'react'
import { ListItem, Checkbox, Typography, styled } from '@mui/material'
import { Todo } from './../types/types'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
}

export const TodoItem = React.memo(({ todo, onToggle }: TodoItemProps) => {
  return (
    <ListItem sx={{ borderBottom: '1px solid #c1c1c1', px: '11px' }}>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        icon={
          <span
            style={{
              width: 24,
              height: 24,
              border: '1px solid #c1c1c1',
              borderRadius: '50%'
            }}
          />
        }
        checkedIcon={
          <CheckOutlinedIcon
            sx={{
              fontSize: 24,
              color: '#4caf50',
              border: '1px solid #c1c1c1',
              borderRadius: '50%'
            }}
          />
        }
        sx={{
          padding: 0,
          mr: '20px',
          '& .MuiSvgIcon-root': { fontSize: 24 }
        }}
        inputProps={
          {
            'data-testid': 'toggle-checkbox'
          } as React.InputHTMLAttributes<HTMLInputElement>
        }
      />
      <Typography
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? 'text.disabled' : 'inherit',
          wordBreak: 'break-word'
        }}
      >
        {todo.text}
      </Typography>
    </ListItem>
  )
})
