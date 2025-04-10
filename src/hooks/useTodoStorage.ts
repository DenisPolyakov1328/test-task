import { useState, useEffect } from 'react';
import { Todo } from './../types/types';

export const useTodoStorage = (initialTodos: Todo[]) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const saved = localStorage.getItem('todos');
            return saved ? JSON.parse(saved) : initialTodos;
        } catch {
            return initialTodos;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
            console.error('Failed to save todos:', error);
        }
    }, [todos]);

    return [todos, setTodos] as const;
};