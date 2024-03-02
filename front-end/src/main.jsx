import './styles/theme.css';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage, Favourites, Cart, ProductsList } from '@views';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/ulubione', element: <Favourites /> },
  { path: '/koszyk', element: <Cart /> },
  { path: '/lista-produktow', element: <ProductsList /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
