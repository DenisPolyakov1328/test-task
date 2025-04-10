import { Button } from '@mui/material'

interface ClearButtonProps {
  hasCompletedTodos: boolean
  onClearCompleted: () => void
}

export const ClearButton = ({
  hasCompletedTodos,
  onClearCompleted
}: ClearButtonProps) => {
  if (!hasCompletedTodos) return null

  return (
    <Button
      variant="outlined"
      onClick={onClearCompleted}
      sx={{ marginTop: 2 }}
      data-testid="clear-button"
    >
      Clear completed
    </Button>
  )
}
