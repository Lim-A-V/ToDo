import { Form } from "../components/Form/Form"
import { TodoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { craeteAction, deleteAction, updateAction } from "../faeture/todoList";

export const TodoListPage = () => {

   const notifyNew = () => toast('Добавлена новая запись', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      pauseOnHover: false,
   });

   const notifyDelete = () => toast.error('Запись удалена !!!', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      pauseOnHover: false,
   });

   const notifyUpdate = () => toast.info('Статус записи изменен', {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      pauseOnHover: false,
   });

   const todoList = useSelector((state: RootState) => state.todoList.todos) // получение данных из стора Redux
   const inpuitName = useSelector((state: RootState) => state.form.value) // получение данных из стора Redux

   const dispatch = useDispatch() // хук Redux, который позволяет функциональным компонентам отправлять действия в стор Redux

   const updateToDo = (toDoItem: ToDo) => {
      dispatch(updateAction(toDoItem))
      notifyUpdate();
   }

   const deleteToDo = (toDoItem: ToDo) => {
      dispatch(deleteAction(toDoItem))
      notifyDelete();
   }

   const craeteNewToDo = () => {
      dispatch(craeteAction(inpuitName))
      notifyNew();
   }

   return (
      <HelmetProvider>
         <Helmet>
            <title>Список задач</title>
         </Helmet>
         <Form craeteNewToDo={craeteNewToDo} />
         <TodoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
         <ToastContainer />
      </HelmetProvider>
   )
}