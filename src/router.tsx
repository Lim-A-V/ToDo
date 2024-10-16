import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layouts/Layout";
import { NotFound } from "./pages/404";
import { TodoListPage } from "./pages/TodoListPage";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
         { path: '/ToDo/', element: <TodoListPage /> },
         { path: '/ToDo/list', element: <ViewList /> },
         { path: '/ToDo/list/:id', element: <ViewListItem /> }
      ]
   },
   {
      path: '*',
      element: <NotFound />,
   },
], {basename: '/ToDo/'}
)