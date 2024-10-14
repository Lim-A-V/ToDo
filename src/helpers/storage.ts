import { RootState } from "../store"

// функция сохранения todo в LocalStorage
export const saveToLocalStorage = (state: RootState) => {
   try {
      const appState = JSON.stringify(state)
      localStorage.setItem('appState', appState)
   }
   catch (e) {
      console.warn(e)
   }
}

// функция полкчениния todo из LocalStorage
export const loadFromLocalStorage = () => {
   try {
      const appState = localStorage.getItem('appState')
      if (!appState) return undefined
      return JSON.parse(appState)
   }
   catch (e) {
      console.warn(e)
   }
}