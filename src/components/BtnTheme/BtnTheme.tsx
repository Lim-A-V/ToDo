import { useDispatch, useSelector } from "react-redux"
import { BtnThemeBtn, BtnThemeDark, BtnThemeInput, BtnThemeLabel, BtnThemeLight, BtnThemeWrapper } from "./BtnTheme.styled"
import { toggleThemeAction } from "../../faeture/themeList"
import { RootState } from "../../store"

export const BtnTheme = () => {

   const dispatch = useDispatch()

   const Theme = useSelector((state: RootState) => state.themeList);

   const check = Theme.theme.name === 'dark' ? true : false

   const temeChange = (checked: boolean) => {
      dispatch(toggleThemeAction(checked))
   }

   return (
      <BtnThemeWrapper>
         <BtnThemeInput onChange={(event) => temeChange(event.target.checked)} id="toggle_checkbox" type="checkbox" checked={check}></BtnThemeInput>
         <BtnThemeLabel htmlFor="toggle_checkbox">
            <BtnThemeLight id="star">
               <BtnThemeBtn className="star" id="star-1">★</BtnThemeBtn>
               <BtnThemeBtn className="star" id="star-2">★</BtnThemeBtn>
            </BtnThemeLight>
            <BtnThemeDark id="moon"></BtnThemeDark>
         </BtnThemeLabel>
      </BtnThemeWrapper>
   )
}