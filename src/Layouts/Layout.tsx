import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { HelmetProvider, Helmet } from "react-helmet-async"
import { GlobalStyle } from "../styles/GlobalStyle"
import { ThemeProvider } from "styled-components"
// import { themes } from "../styles/themes"
import { RootState } from "../store"
import { useSelector } from "react-redux"

export const Layout = () => {

   const theme = useSelector((state: RootState) => state.themeList.theme) // получение данных из стора Redux

   return (
      <HelmetProvider>
         <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Helmet>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
               <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
            </Helmet>
            <Header countHide={true} />
            <Outlet />
         </ThemeProvider>
      </HelmetProvider>
   )
}