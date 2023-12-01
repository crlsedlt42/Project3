import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Login from './pages/LogIn';
import Jewelry from './pages/Jewelry';
import Hoodies from './pages/Hoodies';
import Hoodie_Walkin from './pages/Hoodie_WalkIn';
import Signup from './pages/Signup';
import AboutPage from './pages/about.jsx';
import ScrollControlledVideo from './pages/ScrollAnimation.jsx';

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
        element: <Login />,
      },
      {
        path: '/Signup',
        element: <Signup />,
      },
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
      {
        path: '/about',
        element: <AboutPage />
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={BrowserRouter} />
);
