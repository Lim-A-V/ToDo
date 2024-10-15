import { NavLink } from 'react-router-dom';
import headerClass from './Header.module.scss';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';

export const Header = ({ countHide }: { countHide: boolean }) => {

   const getActive = ({ isActive }: { isActive: boolean }): string => {
      return isActive ? `${headerClass.link} ${headerClass.active}` : headerClass.link
   }

   const todoList = useSelector((state: RootState) => state.todoList.todos) // получение данных из стора Redux

   const newTodos = todoList.filter((item) => item.isDone === true);
   const todosTrue = newTodos.length;
   const todosFlase = todoList.length - newTodos.length;

   return (
      <header className={headerClass.header}>
         <div className={headerClass.container}>
            <NavLink to="/" className={getActive}>ToDo</NavLink>
            <NavLink to="/list" className={getActive}>Список задач</NavLink>
            {(countHide) ? <div className={headerClass.numTasks} id="count-wrapper">Задачи: <span className={headerClass.todosFalse}>{todosFlase}</span>/<span className={headerClass.todosTrue}>{todosTrue}</span></div> : null}
         </div>
      </header>
   )
}