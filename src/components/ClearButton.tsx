import { Button } from '@mui/material'

interface ClearButtonProps {
  onClearCompleted: () => void
  children: React.ReactNode
}

export const ClearButton = ({
  onClearCompleted,
  children
}: ClearButtonProps) => {
  return (
    <Button
      variant="text"
      onClick={onClearCompleted}
      sx={{
        color: 'text.secondary',
        textTransform: 'none',
        py: '7px',
        px: '10px'
      }}
    >
      {children}
    </Button>
  )
}
