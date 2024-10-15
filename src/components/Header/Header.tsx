import { NavLink } from 'react-router-dom';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

import { HeaderContainer, HeaderLink, HeaderNumTasks, HeaderSite, HeaderTodos } from './Header.styled';

export const Header = ({ countHide }: { countHide: boolean }) => {

   // const getActive = ({ isActive }: { isActive: boolean }): string => {
   //    return isActive ? `${HeaderLink} ${HeaderLinkActive}` : HeaderLink
   // }

   const todoList = useSelector((state: RootState) => state.todoList.todos) // получение данных из стора Redux

   const newTodos = todoList.filter((item) => item.isDone === true);
   const todosTrue = newTodos.length;
   const todosFlase = todoList.length - newTodos.length;

   return (
      <HeaderSite>
         <HeaderContainer>
            <NavLink to="/">
               <HeaderLink>ToDo</HeaderLink>
            </NavLink>
            <NavLink to="/list">
               <HeaderLink>Список задач</HeaderLink>
            </NavLink>
            {(countHide) ? <HeaderNumTasks id="count-wrapper">Задачи: <HeaderTodos color='#9e0000'>{todosFlase}</HeaderTodos>/<HeaderTodos color='green'>{todosTrue}</HeaderTodos></HeaderNumTasks> : null}
         </HeaderContainer>
      </HeaderSite>
   )
}