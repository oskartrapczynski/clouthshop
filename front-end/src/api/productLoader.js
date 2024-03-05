import { BACKEND_URL } from '@constants';

const productLoader = ({ params: { productId } }) => {
  return fetch(`${BACKEND_URL}/products/${productId}`);
};

export default productLoader;
