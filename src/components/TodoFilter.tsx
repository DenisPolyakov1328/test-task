import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FilterType } from './../types/types'

interface TodoFilterProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const TodoFilter = ({
  currentFilter,
  onFilterChange
}: TodoFilterProps) => {
  return (
    <ToggleButtonGroup
      value={currentFilter}
      exclusive
      onChange={(_, newFilter) => newFilter && onFilterChange(newFilter)}
      aria-label="Фильтр задач"
      sx={{
        gap: 1,
        '& .MuiToggleButtonGroup-grouped': {
          color: 'text.secondary',
          border: '2px solid transparent',
          borderRadius: '4px',
          bgcolor: 'transparent',
          textTransform: 'none',
          py: '5px',
          px: '10px',
          '&:hover, &.Mui-selected:hover': {
            bgcolor: 'transparent'
          },
          '&.Mui-selected': {
            borderColor: '#ffcdd2',
            color: 'text.secondary',
            bgcolor: 'transparent'
          }
        }
      }}
    >
      <ToggleButton value="all" aria-label="Все задачи">
        All
      </ToggleButton>
      <ToggleButton value="active" aria-label="Активные задачи">
        Active
      </ToggleButton>
      <ToggleButton value="completed" aria-label="Завершённые задачи">
        Completed
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
