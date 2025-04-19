import { Box } from '@mui/material'
import { Counter } from './Counter/Counter'
import { TodoFilter } from './TodoFilter/TodoFilter'
import { ClearButton } from './ClearButton/ClearButton'
import { FilterType, Todo } from './../../types/types'

interface ControlBarProps {
  todos: Todo[]
  filter: FilterType
  handleFilterChange: (newFilter: FilterType) => void
  handleClearCompleted: () => void
}

export const ControlBar = ({
  todos,
  filter,
  handleFilterChange,
  handleClearCompleted
}: ControlBarProps) => {
  return (
    <Box
      sx={{
        mt: 'auto',
        p: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Counter todos={todos} />
      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <ClearButton onClearCompleted={handleClearCompleted}>
        Clear completed
      </ClearButton>
    </Box>
  )
}
