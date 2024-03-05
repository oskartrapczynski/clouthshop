import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING, CATEGORIES } from '@constants';
import { redirect } from 'react-router-dom';

const productListLoader = ({ params: { gender, category, subcategory } }) => {
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (!foundCategory || !foundGender) return redirect('/kobieta');
  let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`;

  const foundSubcategory =
    subcategory &&
    foundCategory.subcategories.find((sc) => sc.path === subcategory);

  if (foundSubcategory) url = `${url}&subcategory=${subcategory}`;
  else redirect('/kobieta');

  return fetch(url);
};

export default productListLoader;
