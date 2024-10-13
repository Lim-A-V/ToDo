import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-item"
import { useNavigate, useParams } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"

interface ComponentProps {
   todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {

   const { id } = useParams()
   const navigate = useNavigate()
   const [todo, setTodo] = useState<ToDo>()

   useEffect(() => {
      const searchTodo = todos.find((todos) => String(todos.id) === id)
      console.log(searchTodo);
      if (searchTodo) {
         setTodo(searchTodo)
         document.title=searchTodo.text;
      } else {
         navigate('/404')
      }
   }, [todos, id, navigate])

   return (
      <HelmetProvider>
         <Helmet>
            {/* <title>Задача - {todo?.text}</title> */}
         </Helmet>
         <div className="container">
            <h1>{todo?.text}:</h1>
         </div>
      </HelmetProvider>
   )
}