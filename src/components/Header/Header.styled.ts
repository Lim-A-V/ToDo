import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderSite = styled.header`
   position: fixed;
   top: 0;
   right: 0;
   left: 0;
   height: 50px;
   transition: background-color .3s;
   background-color: ${({theme}) => theme.colors.backgroudPrimery};
   display: flex;
   align-items: center;
`

export const HeaderContainer = styled.div`
   position: relative;
   max-width: 97%;
   width: 100%;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const HeaderLink = styled(NavLink)`
   padding: 10px;
   color: #fff;
   font-size: 16px;
   font-weight: 400;

   &.active {
      text-decoration: underline;
      filter: ${({theme}) => theme.colors.linkDropShadow};
   }
`

export const HeaderToggleBtn = styled.button`
   position: absolute;
   left: 0;
   padding: 5px 20px;
   color: blue;
`

export const HeaderNumTasks = styled.div`
   position: absolute;
   display: flex;
   gap: 4px;
   align-items: center;
   right: 5px;
   color: #fff;
   font-size: 16px;
   font-weight: 400;

   $ span {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
   }
`
export const HeaderTodos = styled.span<{ color: string }>`
   background-color: ${(props) => props.color};
   width: 40px;
   height: 40px;
   border-radius: 50%;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: 600;
`
export const HeaderTodosFalse = styled.span`
   background-color: #9e0000;
`