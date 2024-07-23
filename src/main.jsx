import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css' 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HeaderPage from './component/app_header'
import Layout from './component/layout';
import Add from './component/add';
import Register from './component/register';
import Login from './component/login';
import Chart from './component/chart';
const routers = createBrowserRouter([
  {
    path: "/",
    element: <HeaderPage />,
    children: [
      {
        path: "/layout",
        element: <Layout />,
      },
      {
        path: "/Add",
        element: <Add />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chart",
        element: <Chart />
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routers}/>
  </React.StrictMode>,
)
