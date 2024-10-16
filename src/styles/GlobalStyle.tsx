import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
   ${normalize}
   
   * {
      box-sizing: border-box;
   }
   a {
      text-decoration: none
   }
   body {
      transition: background-color .3s;
      background-color: ${({ theme }) => theme.colors.backgroudSecondary};
      padding: 50px 0 0 0;
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      line-height: 1.429;
      color: black;
   }

   .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
   }

   .list-item-wrapper {
      gap: 10px;
      width: 100%;
      text-align: center;
      border-radius: 4px;
   }

   .list-item-wrapper a{
      width: 100%;
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
   }

   .hide {
      display: none !important;
   }

   /* 404 */

   .error404 {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
   }

   .error404_img-content {
      position: relative;
      width: 100%;
      display: flex;
      overflow: hidden;
      max-width: 600px;
   }

   .error404_img-content__img {
      width: 100%;
      z-index: 1;
   }

   .error404_img-content__move {
      position: absolute;
      width: 20vw;
      height: 20vw;
      max-width: 250px;
      max-height: 250px;
      border-radius: 50%;
      background-color: #4682b4;
      z-index: 0;
      filter: blur(30px);
      animation: k-move 4s infinite linear;
   }

   @keyframes k-move {
      0% {
         top: 0%;
         left: 10%;
      }

      15% {
         top: 30%;
         left: 70%
      }

      30% {
         top: 40%;
         left: 20%
      }

      50% {
         top: 80%;
         left: 70%
      }

      65% {
         top: 0%;
         left: 80%
      }

      80% {
         top: 50%;
         left: 60%
      }

      100% {
         top: 0%;
         left: 10%;
      }
   }

   .error404__title {
      font-size: 20px;
      font-weight: 600;
      text-align: center;
   }

   /* 404 END */
`