import { ToDo } from "../../models/todo-item"
import { ListItemLink } from './ListItem.styled';

export const ListItem = ({ todo }: { todo: ToDo }) => {
   return (
         <ListItemLink to={`/list/${todo.id}`} data={`${todo.isDone ? `done` : `notDone`}`}>
            {todo.text}
         </ListItemLink>
   )
}