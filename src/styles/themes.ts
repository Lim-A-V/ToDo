import { Theme, Themes } from "../models/theme";

const light: Theme = {
   name: 'light',
   colors: {
      backgroudPrimery: '#4682b4',
      backgroudSecondary: '#edf0f1',
      linkDropShadow: 'drop-shadow(3px 3px 2px black)'
   }
}
const dark: Theme = {
   name: 'dark',
   colors: {
      backgroudPrimery: 'black',
      backgroudSecondary: '#474747',
      linkDropShadow: 'drop-shadow(3px 2px 3px #ccc)'
   }
}
 
export const themes: Themes = { light, dark }