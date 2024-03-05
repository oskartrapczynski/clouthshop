import {
  FlexContainer,
  ExpandableMenu,
  Breadcrumbs,
  Photos,
  Details,
} from '@components';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
  const product = useLoaderData();
  return (
    <FlexContainer>
      <ExpandableMenu />
      <div style={{ width: '100%' }}>
        <Breadcrumbs />
        <FlexContainer>
          <Photos product={product} />
          <Details product={product} />
        </FlexContainer>
      </div>
    </FlexContainer>
  );
};

export default ProductDetails;
