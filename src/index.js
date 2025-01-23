import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from'./component/navbar'
import Home from'./component/home'
import About from'./component/about'
import Contact from'./component/contact'
import ErrorPage from'./component/erorr'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Navbar />,
  },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

