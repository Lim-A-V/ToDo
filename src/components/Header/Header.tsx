// import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderContainer, HeaderLink, HeaderNumTasks, HeaderSite, HeaderTodos, HeaderToggleBtn } from './Header.styled';
import { toggleThemeAction } from '../../faeture/themeList';

export const Header = ({ countHide }: { countHide: boolean }) => {

   // const getActive = ({ isActive }: { isActive: boolean }): string => {
   //    return isActive ? `${HeaderLink} ${HeaderLinkActive}` : HeaderLink
   // }

   const todoList = useSelector((state: RootState) => state.todoList.todos) // получение данных из стора Redux

   const newTodos = todoList.filter((item) => item.isDone === true);
   const todosTrue = newTodos.length;
   const todosFlase = todoList.length - newTodos.length;

   const dispatch = useDispatch()

   return (
      <HeaderSite>
         <HeaderContainer>
            <HeaderLink to="/">ToDo</HeaderLink>
            <HeaderLink to="/list">Список задач</HeaderLink>
            {/* <div className='toggleButtton'> */}
               <HeaderToggleBtn onClick={() => dispatch(toggleThemeAction())}>toggle</HeaderToggleBtn>
            {/* </div> */}
            {(countHide) ? <HeaderNumTasks id="count-wrapper">Задачи: <HeaderTodos color='#9e0000'>{todosFlase}</HeaderTodos>/<HeaderTodos color='green'>{todosTrue}</HeaderTodos></HeaderNumTasks> : null}
         </HeaderContainer>
      </HeaderSite>
   )
}