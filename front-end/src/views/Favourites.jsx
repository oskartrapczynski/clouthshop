import { FavouritesList } from '@components';
import { useLoaderData } from 'react-router-dom';

const Favourites = () => {
  const favourites = useLoaderData();
  console.log(favourites);
  return <FavouritesList favourites={favourites} />;
};

export default Favourites;
