export interface Theme {
   name: string,
   colors: {
      backgroudPrimery: string,
      backgroudSecondary: string
      linkDropShadow: string,
      colorText: string,
   }
}

export interface Themes {
   [key: string]: Theme
}