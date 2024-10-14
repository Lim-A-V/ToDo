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
         { path: '/', element: <TodoListPage /> },
         { path: '/list', element: <ViewList /> },
         { path: '/list/:id', element: <ViewListItem /> }
      ]
   },
   {
      path: '*',
      element: <NotFound />,
   },
], //{basename: '/app/'}
)