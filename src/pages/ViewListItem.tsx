import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ViewListItem = () => {
   const todoList = useSelector((state: RootState) => state.todoList.todos)
   const { id } = useParams()
   const navigate = useNavigate()
   const [todo, setTodo] = useState<ToDo>()

   useEffect(() => {
      const searchTodo = todoList.find((todoList) => String(todoList.id) === id)
      if (searchTodo) {
         setTodo(searchTodo)
      } else {
         navigate('/404')
      }
   }, [todoList, id, navigate])

   return (
      <HelmetProvider>
         <Helmet>
            <title>{`Задача - ${todo?.text}`}</title>
         </Helmet>
         <div className="container">
            <h1>{todo?.text}:</h1>
         </div>
      </HelmetProvider>
   )
}