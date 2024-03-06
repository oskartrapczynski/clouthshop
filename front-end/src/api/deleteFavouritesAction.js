import { BACKEND_URL } from '@constants';

const deleteFavouritesAction = ({ params }) => {
  return fetch(`${BACKEND_URL}/favourites/${params.favouriteId}`, {
    method: 'DELETE',
  });
};

export default deleteFavouritesAction;
