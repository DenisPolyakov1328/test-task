import React from 'react'
import { List } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'
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
