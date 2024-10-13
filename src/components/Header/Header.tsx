import { NavLink } from 'react-router-dom';
import headerClass from './Header.module.scss';

export const Header = ({count}: {count:boolean}) => {

   const getActive = ({ isActive }: { isActive: boolean }): string => {
      return isActive ? `${headerClass.link} ${headerClass.active}` : headerClass.link
   }

   return (
      <header className={headerClass.header}>
         <div className={headerClass.container}>
            <NavLink
               to="/"
               className={getActive}
            >Home</NavLink>
            <NavLink
               to="/todo"
               className={getActive}
            >ToDo</NavLink>
            {(count) ? <div className={headerClass.numTasks} id="count-wrapper">Всего задач: <span id="box"></span></div> : null}
         </div>
      </header>
   )
}