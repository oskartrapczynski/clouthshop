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
import {
  mainPageLoader,
  productListLoader,
  productLoader,
  addProductsToFavouritesAction,
  favouritesLoader,
  deleteFavouritesAction,
} from '@api';

const router = createBrowserRouter([
  {
    path: 'add-to-favourites/:productId',
    action: addProductsToFavouritesAction,
  },

  {
    path: 'delete-from-favourites/:favouriteId',
    action: deleteFavouritesAction,
  },
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '/ulubione', element: <Favourites />, loader: favouritesLoader },
      { path: '/koszyk', element: <Cart /> },
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
      {
        path: '/:gender/:category/:subcategory/:productId',
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
