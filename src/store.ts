import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './faeture/todoList'
import formReducer from './faeture/form'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
   reducer: {
      todoList: todoReducer,
      form: formReducer,
   },
   preloadedState: loadFromLocalStorage() // опциональный параметр, задающий начальное состояние хранилища
})

// .subscribe метод подписка, он срабатывает при каждом изменении store, при изменении сохраняем их в LocalStorage
store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch