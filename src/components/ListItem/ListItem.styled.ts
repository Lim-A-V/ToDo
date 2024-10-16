import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ListItemLink = styled(NavLink)<{ data: string }>`
   display: block;
   text-decoration: none;
   padding: 10px;
   font-size: 20px;
   font-weight: 500;
   color: ${(props) => (props.data === "notDone") ? "red" : "green"};

   &:hover{
      animation: rotate 1.2s ease;
      animation-iteration-count: 1;
   }

   @keyframes rotate {
      15% {
         transform: rotateZ(-1deg);
      }

      30% {
         transform: rotateZ(1deg);
      }

      50% {
         transform: rotateZ(-0.5deg);
      }

      65% {
         transform: rotateZ(0.5deg);
      }

      80% {
         transform: rotateZ(-0.2deg);
      }

      100% {
         transform: rotateZ(0.2deg);
      }
   }
`