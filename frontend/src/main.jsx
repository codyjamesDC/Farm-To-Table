import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from 'react';

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"; 

// import main app components from pages
const router = createBrowserRouter([
  { path: "/", element: <App />, children: [
    { path: "home", element: <Home /> },
    { path: "login", element: <Login /> }
  ]
  }
]);

// render everything using router provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
