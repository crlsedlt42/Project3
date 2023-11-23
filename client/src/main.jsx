import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LogIn from './pages/LogIn.jsx';
import Jewelry from './pages/Jewelry';
import Hoodies from './pages/Hoodies.jsx';
import Hoodie_Walkin from './pages/Hoodie_WalkIn.jsx';
// import Signup from './pages/Signup.jsx';

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LogIn />,
      },
      // {
      //   path: '/Signup',
      //   element: <Signup />,
      // },
      {
        path: '/jewelry',
        element: <Jewelry />,
      },
      {
        path: '/Hoodies',
        element: <Hoodies />,
      },
      {
        path: '/Hoodie_Walkin',
        element: <Hoodie_Walkin />,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={BrowserRouter}>
        <App />
      </RouterProvider>
  </React.StrictMode>,
)
