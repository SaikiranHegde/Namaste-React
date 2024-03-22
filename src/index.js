import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact-us",
    element: <Contact />
  }
]);

root.render(
  // <React.StrictMode>
    <RouterProvider router={appRouter} />
  // </React.StrictMode>
);

