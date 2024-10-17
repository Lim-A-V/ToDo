import styled from "styled-components";

export const ToDoContainer = styled.ul`
   width: 100%;
   padding: 15px;

   & .completed {
      position: relative;
      padding: 60px 0 0 0;
   }

   & li {
      color: ${({theme}) => theme.colors.colorText}
   }

   & .failed li {
      border: 1px solid #9e0000;
      background: #ff000030;
   }

   & .completed li {
      border: 1px solid green;
      background: #00800030;
   }

   & .failed:empty:after {
      content: 'Нет задач на выполнение';
   }

   & .failed:after {
      width: 100%;
      display: block;
      text-align: center;
      font-size: 12px;
      color: #aaa;
   }

   & .completed:empty:after {
      content: 'Нет выполненых задач';
   }

   & .completed:before {
      content: '';
      width: 150px;
      height: 1px;
      background: #d8e5e0;

      position: absolute;
      top: 25px;
      left: calc(50% - 75px);
   }

   & .completed:after {
      width: 100%;
      display: block;
      text-align: center;
      font-size: 12px;
      color: #aaa;
   }
`

export const ToDoList = styled.div`
   width: 100%;
   margin-top: 20px;
   margin-bottom: 20px;
   padding-left: 0;
   list-style: none;
`