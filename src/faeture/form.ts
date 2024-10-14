// Хранилище состояний
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// описываем типы данных в редьюсере
export interface inputNameSlice {
   value: string
}
// инициализация редьюсера, изначальное состояние
const initialState: inputNameSlice = {
   value: ''
}

// создание редьюсера, который отвечает за изменение состояния
export const inpuitNameSlice = createSlice({
   name: 'inpuitName',
   initialState,
   reducers: { // мутаторы состояния, которые получают доступ к данным (state) и изменяют их
      inpuitNameAction: (state, action: PayloadAction<string>) => {
         state.value = action.payload;
      },
   },
})

export const { inpuitNameAction } = inpuitNameSlice.actions

export default inpuitNameSlice.reducer