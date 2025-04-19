import React from 'react'
import { Checkbox } from '@mui/material'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

interface CustomCheckboxProps {
  checked: boolean
  onChange: () => void
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onChange,
  inputProps
}) => {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
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
      inputProps={inputProps}
    />
  )
}
