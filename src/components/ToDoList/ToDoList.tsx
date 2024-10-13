import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"
import { useEffect } from "react";

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
         .map((item, idx) => {
            return (
               <ToDoListItem
                  toDoItem={item}
                  key={idx}
                  updateToDo={props.updateToDo}
                  deleteToDo={props.deleteToDo} />
            )
         })
   }

   return (
      <div className="todo-container">
         <ul className="todo-list failed">
            {checkedList(false)}
         </ul>
         <ul className="todo-list completed">
            {checkedList(true)}
         </ul>
      </div>
   )
}