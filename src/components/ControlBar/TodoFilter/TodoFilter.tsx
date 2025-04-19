import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FilterType } from '../../../types/types'

interface TodoFilterProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

const filters: { value: FilterType; label: string; ariaLabel: string }[] = [
  { value: 'all', label: 'All', ariaLabel: 'Все задачи' },
  { value: 'active', label: 'Active', ariaLabel: 'Активные задачи' },
  { value: 'completed', label: 'Completed', ariaLabel: 'Завершённые задачи' }
]

export const TodoFilter = ({
  currentFilter,
  onFilterChange
}: TodoFilterProps) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newFilter: FilterType | null
  ) => {
    if (newFilter !== null) {
      onFilterChange(newFilter)
    }
  }

  return (
    <ToggleButtonGroup
      value={currentFilter}
      exclusive
      onChange={handleChange}
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
      {filters.map(({ value, label, ariaLabel }) => (
        <ToggleButton key={value} value={value} aria-label={ariaLabel}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
