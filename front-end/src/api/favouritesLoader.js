import { BACKEND_URL } from '@constants';

const favouritesLoader = () => {
  return fetch(`${BACKEND_URL}/favourites?_expand=product`);
};

export default favouritesLoader;
