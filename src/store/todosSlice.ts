import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { RootStateType } from './index';
import { ITodo } from '../types';

interface IState {
  todos: ITodo[],
}

const initialState: IState = {
  todos: [],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, {payload}) => {
      state.todos.push(payload);
    },
    removeTodo: (state, {payload}) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    }
  },
});

export const getTodos = (state: RootStateType): ITodo[] => state.todosSlice.todos;
export const getActiveTodosNumber = (state: RootStateType): number => state.todosSlice.todos.filter((todo) => !todo.completed).length;

export const { addTodo, removeTodo, toggleTodo, clearCompleted } = todosSlice.actions;

export default todosSlice.reducer;