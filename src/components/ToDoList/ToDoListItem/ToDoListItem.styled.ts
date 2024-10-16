import styled from "styled-components";

export const ToDoItem = styled.li`
   width: 100%;
   min-height: 50px;
   font-size: 14px;
   font-weight: 500;
   color: #444;
   line-height: 22px;

   display: flex;
   justify-content: space-between;

   background: #fff;
   border-radius: 5px;
   position: relative;
   box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
   margin: 0 0 10px 0;
   padding: 14px;
   word-break: break-word;

   transition: .3s;
   animation: сreation .3s ease;
   animation-iteration-count: 1;

   @keyframes сreation {
      0% {
        scale: 0;
      }

      100% {
         scale: 1;
      }
   }

   &:last-child {
      margin: 0;
   }
   
`
export const ToDoItemText = styled.span``

export const ToDoItemConrtols = styled.div`
   width: 100px;
   height: 50px;
   display: flex;

   position: absolute;
   top: 0;
   right: 0;
`

export const ToDoItemButton = styled.button<{ $icon: string }>`
   width: 50px;
   height: 50px;
   background-color: transparent;
   background-position: center;
   background-repeat: no-repeat;
   position: relative;
   border: 0;
   box-shadow: none;
   outline: none;
   cursor: pointer;
   transition: .3s;

   background-image: url(${(props) => props.$icon});

   // &:before {
   //    content: '';
   //    width: 1px;
   //    height: 30px;
   //    background: #edf0f1;

   //    position: absolute;
   //    top: 10px;
   //    left: 0;
   // }

   &:hover {
      scale: 1.1;
      filter: drop-shadow(1px 3px 2px #333);
   }
`