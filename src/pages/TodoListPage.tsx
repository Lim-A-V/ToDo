import { useState } from "react";
import { Form } from "../components/Form/Form"
import { TodoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";

export const TodoListPage = () => {

   const notifyNew = () => toast('Добавлена новая запись', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
   });

   const notifyDelete = () => toast.error('Запись удалена !!!', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
   });

   const notifyUpdate = () => toast.info('Статус записи изменен', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
   });

   const [todos, setTodos] = useState<ToDo[]>([])

   const updateToDo = (toDoItem: ToDo) => {
      const newTodos = todos.map((todo) => {
         if (todo.id === toDoItem.id) {
            todo.isDone = !todo.isDone;
         }
         return todo;
      });
      setTodos(newTodos);
      notifyUpdate();
   }

   const deleteToDo = (toDoItem: ToDo) => {
      const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
      setTodos(newTodos);
      notifyDelete();
   }

   const craeteNewToDo = (text: string) => {
      const newToDo: ToDo = {
         id: todos.length,
         text: text,
         isDone: false
      }
      setTodos([...todos, newToDo]);
      notifyNew();
   }

   return (
      <HelmetProvider>
         <Helmet>
            <title>Список задач</title>
         </Helmet>
         <Form craeteNewToDo={craeteNewToDo} />
         <TodoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo} />
         <ToastContainer />
      </HelmetProvider>
   )
}