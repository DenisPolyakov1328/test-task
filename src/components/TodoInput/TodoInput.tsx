import { useState } from 'react'
import { TextField, IconButton } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'

interface TodoInputProps {
  onAdd: (text: string) => void
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim() === '') return
    onAdd(text)
    setText('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <TextField
      variant="standard"
      placeholder="What needs to be done?"
      multiline
      maxRows={4}
      fullWidth
      value={text}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      slotProps={{
        input: {
          startAdornment: (
            <IconButton size="large" onClick={handleAdd}>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          )
        }
      }}
      sx={{
        '.MuiInputBase-root': {
          minHeight: '58.8px',
          '&:before': {
            borderBottom: '1px solid #c1c1c1'
          }
        },
        '.MuiInputBase-input::placeholder': {
          fontStyle: 'italic'
        }
      }}
    />
  )
}
