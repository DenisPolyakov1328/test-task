import React from 'react'
import { List } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
import { TodoItem } from './../TodoItem/TodoItem'
import { Todo } from './../../types/types'

interface TodoListProps {
  todos: Todo[]
  filter: 'all' | 'active' | 'completed'
  onToggle: (id: number) => void
}

const getFilteredTodos = (
  todos: Todo[],
  filter: 'all' | 'active' | 'completed'
) => {
  if (filter === 'active') return todos.filter((todo) => !todo.completed)
  if (filter === 'completed') return todos.filter((todo) => todo.completed)
  return todos
}

export const TodoList = React.memo(
  ({ todos, filter, onToggle }: TodoListProps) => {
    const filteredTodos = getFilteredTodos(todos, filter)

    return (
      <List
        sx={{
          p: 0,
          maxHeight: '60vh',
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: 6
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: 'grey.400',
            borderRadius: 3
          }
        }}
      >
        <AnimatePresence>
          {filteredTodos.map((todo) => (
            <motion.div
              key={todo.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <TodoItem todo={todo} onToggle={onToggle} />
            </motion.div>
          ))}
        </AnimatePresence>
      </List>
    )
  }
)
