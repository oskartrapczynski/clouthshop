import { BACKEND_URL, PATH_TO_ENDPOINT_MAPPING, CATEGORIES } from '@constants';
import { redirect } from 'react-router-dom';

const productListLoader = ({
  params: { gender, category, subcategory },
  request,
}) => {
  const pageUrl = new URL(request.url);
  const page = pageUrl.searchParams.get('page') || 1;
  const foundCategory = CATEGORIES.find((c) => c.path === category);
  const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

  if (!foundCategory || !foundGender) return redirect('/kobieta');
  let url = `${BACKEND_URL}/products/?gender=${foundGender}&category=${category}`;

  const foundSubcategory =
    subcategory &&
    foundCategory.subcategories.find((sc) => sc.path === subcategory);

  if (foundSubcategory) url = `${url}&subcategory=${subcategory}`;
  else redirect('/kobieta');

  url = `${url}&_limit=8&_page=${page}`;

  return fetch(url).then((resp) => {
    const numberOfPages = Math.ceil(
      Number(resp.headers.get('X-Total-Count')) / 8
    );
    return resp.json().then((products) => ({ products, numberOfPages }));
  });
};

export default productListLoader;
