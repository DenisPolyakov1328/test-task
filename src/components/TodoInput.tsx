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
  return (
    <TextField
      variant="standard"
      placeholder="What needs to be done?"
      multiline
      maxRows={4}
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault()
          handleAdd()
        }
      }}
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
        }
      }}
    />
  )
}
