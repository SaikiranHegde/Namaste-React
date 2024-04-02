import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Loader from './components/Loader';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const InstamartLazy = lazy(() => import('./components/Instamart'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Loader />}><InstamartLazy /></Suspense>,
      }
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={appRouter} />
  // </React.StrictMode>
);

