import { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToDo } from "../models/todo-item";
import { ListItem } from "../components/ListItem/ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const ViewList = () => {

   const countTask = localStorage.countTasks;
   const todoList = useSelector((state: RootState) => state.todoList.todos)

   useEffect(() => {
      const element = document.getElementById('box');
      if (element) {
         element.textContent = `${countTask}`;
         localStorage.countTasks = `${countTask}`;
      }
   });

   return (
      <HelmetProvider>
         <Helmet>
            <title>Главная страница</title>
         </Helmet>
         <div className="container list-item-wrapper">
            {
               todoList.map((todo: ToDo) => {
                  return (<ListItem todo={todo} key={todo.id} />)
               })
            }
         </div>
      </HelmetProvider>
   )
}