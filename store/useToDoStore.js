import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  // État global
  todos: [],
  
  // Actions
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    })),
}));