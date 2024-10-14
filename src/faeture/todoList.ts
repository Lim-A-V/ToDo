// Хранилище состояний
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ToDo } from '../models/todo-item'

// описываем типы данных в редьюсере
export interface ToDoState {
   todos: ToDo[],
   todosTrue: number,
   todosFlse: number,
}
// инициализация редьюсера, изначальное состояние
const initialState: ToDoState = {
   todos: [],
   todosTrue: 0,
   todosFlse: 0,
}
// создание редьюсера, который отвечает за изменение состояния
export const todoSlice = createSlice({
   name: 'todoList',
   initialState,
   reducers: { // мутаторы состояния, которые получают доступ к данным (state) и изменяют их
      craeteAction: (state, action: PayloadAction<string>) => { //action - аргументы передаваемые из вне
         const newToDo: ToDo = {
            id: state.todos.length,
            text: action.payload, // если не один аргумент, то action.payload.ИМЯ_АРГУМЕНТА
            isDone: false
         }
         state.todos = [...state.todos, newToDo] // меняем state.todos
      },
      updateAction: (state, action: PayloadAction<ToDo>) => {
         const newTodos = state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
               todo.isDone = !todo.isDone;
            }
            return todo;
         });
         state.todos = newTodos // меняем state.todos
      },
      deleteAction: (state, action: PayloadAction<ToDo>) => {
         const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
         state.todos = newTodos
      },
   },
})

export const { craeteAction, updateAction, deleteAction } = todoSlice.actions

export default todoSlice.reducer

