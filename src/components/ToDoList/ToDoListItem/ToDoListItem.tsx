import { ToDo } from '../../../models/todo-item'
import { ToDoItem, ToDoItemButton, ToDoItemConrtols, ToDoItemText } from './ToDoListItem.styled';

import checkIcon from '../../../assets/images/check.png'
import unCheckIcon from '../../../assets/images/uncheck.png'
import trashIcon from '../../../assets/images/trash.png'

export const ToDoListItem = (props: { toDoItem: ToDo, updateToDo: Function, deleteToDo: Function }) => {
   return (
      <ToDoItem>
         <ToDoItemText>{props.toDoItem.text}</ToDoItemText>
         <ToDoItemConrtols>
            <ToDoItemButton
               icon={trashIcon}
               onClick={() => props.deleteToDo(props.toDoItem)}
               >
            </ToDoItemButton>
            <ToDoItemButton
               icon={props.toDoItem.isDone ? checkIcon : unCheckIcon}
               onClick={() => props.updateToDo(props.toDoItem)}
               >
            </ToDoItemButton>
         </ToDoItemConrtols>
      </ToDoItem>
   )
}