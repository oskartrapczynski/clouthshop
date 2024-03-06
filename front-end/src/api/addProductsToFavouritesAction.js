import { BACKEND_URL } from '@constants';

const addProductsToFavouritesAction = ({ params: { productId } }) => {
  return fetch(`${BACKEND_URL}/favourites`, {
    method: 'POST',
    body: JSON.stringify({ productId: Number(productId) }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default addProductsToFavouritesAction;
