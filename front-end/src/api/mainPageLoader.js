import { redirect } from 'react-router-dom';
import { PATH_TO_ENDPOINT_MAPPING, BACKEND_URL } from '@constants';

const mainPageLoader = ({ params }) => {
  const backendPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
  if (!backendPath) return redirect('/kobieta');
  return fetch(`${BACKEND_URL}/${backendPath}`);
};

export default mainPageLoader;
