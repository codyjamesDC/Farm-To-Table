import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from 'react';

import Root from './pages/Root.jsx';
import Home from "./pages/Home.jsx";

// import main app components from pages
const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Root />, 
    children: [
      { path: "home", element: <Home /> }
    ]
  }
]);

// render everything using router provider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
