import { NavLink } from "react-router-dom"
import { ToDo } from "../../models/todo-item"
import { ListItemLink } from './ListItem.styled';

export const ListItem = ({ todo }: { todo: ToDo }) => {
   return (
      <NavLink
         // className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
         to={`/list/${todo.id}`}>
         <ListItemLink data={`${todo.isDone ? `done` : `notDone`}`}>
            {todo.text}
         </ListItemLink>
      </NavLink>
   )
}