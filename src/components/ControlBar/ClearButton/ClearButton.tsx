import { Button, ButtonProps } from '@mui/material'

interface ClearButtonProps extends ButtonProps {
  onClearCompleted: () => void
}

export const ClearButton = ({
  onClearCompleted,
  children,
  ...props
}: ClearButtonProps) => {
  return (
    <Button
      variant="text"
      onClick={onClearCompleted}
      sx={{
        color: 'text.secondary',
        textTransform: 'none',
        py: '7px',
        px: '10px',
        minWidth: '120px'
      }}
      {...props}
    >
      {children}
    </Button>
  )
}
