import React from 'react'
import { List } from '@mui/material'
import { TodoItem } from './TodoItem'
import { Todo } from './../types/types'

interface TodoListProps {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  onToggle: (id: number) => void
}

export const TodoList = React.memo(
  ({ todos, filter, onToggle }: TodoListProps) => {
    const filteredTodos = todos.filter((todo) => {
      if (filter === 'active') return !todo.completed
      if (filter === 'completed') return todo.completed
      return true
    })

    return (
      <List dense={false}>
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
        ))}
      </List>
    )
  }
)
