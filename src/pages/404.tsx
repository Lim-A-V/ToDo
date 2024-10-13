import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from "../components/Header/Header";

export const NotFound = () => {

   useEffect(() => {
      const element = document.getElementById('count-wrapper');
      if (element) {
         element.classList.add('hide');
         console.log(element.classList);
      }
   }, []);

   return (
      <HelmetProvider>
         <Helmet>
            <title>404 страница</title>
         </Helmet>
         <Header count={false}/>
         <div className="error404 container">
            <div className="error404_img-content">
               <img className="error404_img-content__img" src="/img/404.png" alt="404" />
               <div className="error404_img-content__move"></div>
            </div>
            <h1 className="error404__title">Упс... К сожалению у нас нет такой страницы!</h1>
            <Link className="error404__link btn btn-main" to="/">На главную</Link>
         </div>
      </HelmetProvider>
   )
}