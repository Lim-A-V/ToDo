import styled from "styled-components";


export const BtnThemeWrapper = styled.div`
  position: absolute;
  left: 0;
`

export const BtnThemeInput = styled.input`
   display: none;

      &:checked + label{
      background-color: #000;
   }

   &:checked + label #star {
      top: 3px;
      left: 64px;
      transform: scale(0.3);
      background-color: yellow;
   }
      
   &:checked + label #star div
   {
      color: yellow;
   }

   &:checked + label #moon
   {
      bottom: 6px;
   }

   &:checked + label #moon:before
   {
      background-color: #000;
   }
`
export const BtnThemeLabel = styled.label`
   display: block;
   position: absolute;
   top: 50%;
   right: 0;
   left: 0;
   width: 95px;
   height: 42px;
   margin: 0 auto;
   background-color: #77b5fe;
   border-radius: 56px;
   transform: translateY(-50%);
   cursor: pointer;
   transition: 0.3s ease background-color;
   overflow: hidden;
   border: 1px solid #cccccc29;

   & #star-1 {
         position: relative;
      }

   & #star-2 {
      position: absolute;
      transform: rotateZ(36deg);
   }
`
export const BtnThemeLight = styled.div`
   position: absolute;
   top: 5px;
   left: 8px;
   width: 30px;
   height: 30px;
   background-color: #fafd0f;
   transform: scale(.7);
   border-radius: 50%;
   transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
   z-index: 1;
`
export const BtnThemeBtn = styled.div`
   top: 0;
   left: -7px;
   font-size: 54px;
   line-height: 28px;
   color: #fafd0f;
   transition: 0.3s ease color;
`
export const BtnThemeDark = styled.div`
   position: absolute;
   bottom: -52px;
   right: 26px;
   width: 30px;
   height: 30px;
   background-color: #fff;
   border-radius: 50%;
   transition: 0.3s ease bottom;

   &:before {
      content: "";
      position: absolute;
      top: -12px;
      left: -17px;
      width: 40px;
      height: 40px;
      background-color:#03a9f4;
      border-radius: 50%;
      transition: 0.3s ease background-color;
   }
`