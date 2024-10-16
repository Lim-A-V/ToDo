import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { useEffect } from "react";
import { ToDoContainer, ToDoList } from './ToDoList.styled';

export const TodoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

   const countTask = props.todos.length;

   useEffect(() => {
      const element = document.getElementById('box');
      if (element) {
         element.textContent = `${countTask}`;
         localStorage.countTasks = `${countTask}`;
      }
   });

   const checkedList = (flag: boolean) => {
      return props.todos
         .filter((item) => item.isDone === flag)
         .map((item) => {
            return (
               <ToDoListItem
                  toDoItem={item}
                  key={item.id}
                  updateToDo={props.updateToDo}
                  deleteToDo={props.deleteToDo} />
            )
         })
   }

   return (
      <ToDoContainer>
         <ToDoList className="failed">
            {checkedList(false)}
         </ToDoList>
         <ToDoList className="completed">
            {checkedList(true)}
         </ToDoList>
      </ToDoContainer>
   )
}