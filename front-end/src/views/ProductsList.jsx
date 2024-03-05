import {
  FlexContainer,
  ExpandableMenu,
  Breadcrumbs,
  Products,
  Pagination,
} from '@components';
import { CATEGORIES } from '@constants';
import { useLoaderData, useParams } from 'react-router-dom';

const ProductsList = () => {
  const products = useLoaderData();
  const params = useParams();

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);
  const foundSubcategory =
    params.subcategory &&
    foundCategory.subcategories.find((sc) => sc.path === params.subcategory);

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          products={products}
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
        />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
};

export default ProductsList;
