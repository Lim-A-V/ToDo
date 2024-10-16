// Хранилище состояний
import { createSlice } from '@reduxjs/toolkit'
import { Theme } from '../models/theme'
import { themes } from '../styles/themes'

// описываем типы данных в редьюсере
export interface ThemeState {
   theme: Theme
}
// инициализация редьюсера, изначальное состояние
const initialState: ThemeState = {
   theme: themes['light']
}

// создание редьюсера, который отвечает за изменение состояния
export const themeSlice = createSlice({
   name: 'themeList',
   initialState,
   reducers: { // мутаторы состояния, которые получают доступ к данным (state) и изменяют их
      toggleThemeAction: (state) => {
         state.theme = state.theme.name === 'light' ? themes['dark'] : themes['light'] 
         console.log('toggleThemeAction')
      },
   },
})

export const { toggleThemeAction } = themeSlice.actions

export default themeSlice.reducer