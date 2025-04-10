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
      placeholder="What needs to be done?"
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      slotProps={{
        input: {
          startAdornment: (
            <IconButton size="large" onClick={handleAdd}>
              <KeyboardArrowDownOutlinedIcon />
            </IconButton>
          )
        }
      }}
    />
  )
}
