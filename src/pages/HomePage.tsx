import { useEffect } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToDo } from "../models/todo-item";
import { ListItem } from "../components/ListItem/ListItem";

interface ComponentProps {
   todos: ToDo[]
}

export const HomePage = ({ todos }: ComponentProps) => {

   const countTask = localStorage.countTasks;

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
            <div className="container">
               {
                  todos.map((todo: ToDo, idx: number) => {
                     return (<ListItem todo={todo} key={idx} />)
                  })
               }
            </div>
         </HelmetProvider>
   )
}