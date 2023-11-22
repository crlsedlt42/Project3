import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
import Jewelry from './pages/Jewelry.jsx'
import LogIn from './pages/LogIn.jsx'

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
        path: '/jewelry',
        element: <Jewelry />,
      },
      {
        path: '/login',
        element: <LogIn />,
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
