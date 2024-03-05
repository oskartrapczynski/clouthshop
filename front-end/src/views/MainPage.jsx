import { Hero, Products } from '@components';
import { useLoaderData } from 'react-router-dom';

const MainPage = () => {
  const { bestsellers, heroImageUrl } = useLoaderData();
  return (
    <>
      <Hero heroImage={heroImageUrl} />
      <Products
        products={bestsellers}
        headerText="Sprawdź nasze bestsellery!"
      />
    </>
  );
};

export default MainPage;
