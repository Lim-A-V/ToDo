import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { TodoListPage } from './pages/TodoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './Layouts/Layout';

const todos: ToDo[] = [
   {
      id: 0,
      text: 'Первое действеи',
      isDone: true
   },
   {
      id: 1,
      text: 'Первое действеи',
      isDone: false
   },
   {
      id: 2,
      text: 'Первое действеи',
      isDone: false
   },
   {
      id: 3,
      text: 'Первое действеи',
      isDone: true
   }
]

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
         {
            path: '/',
            element: <HomePage todos={todos} />,
         },
         {
            path: '/todo',
            element: <TodoListPage />,
         },
         {
            path: '/list/:id',
            element: <ItemDescription todos={todos} />,
         },
      ]
   },
   {
      path: '*',
      element: <NotFound />,
   },
], //{basename: '/app/'}
)

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
); 