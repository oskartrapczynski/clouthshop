import './styles/theme.css';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@components';
import {
  MainPage,
  Favourites,
  Cart,
  ProductsList,
  ProductDetails,
} from '@views';
import { mainPageLoader, productListLoader } from '@api';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '/ulubione', element: <Favourites /> },
      { path: '/koszyk', element: <Cart /> },
      { path: '/szczegoly', element: <ProductDetails /> },
      {
        path: '/:gender?',
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: '/:gender/:category/:subcategory?',
        element: <ProductsList />,
        loader: productListLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
