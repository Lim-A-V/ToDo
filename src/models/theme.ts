export interface Theme {
   name: string,
   colors: {
      backgroudPrimery: string,
      backgroudSecondary: string
      linkDropShadow: string
   }
}

export interface Themes {
   [key: string]: Theme
}