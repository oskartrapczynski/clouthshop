import styles from './FavouritesList.module.css';
import { FavouriteProduct, CenterContent } from '@components';

const FavouritesList = ({ favourites }) => {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        {favourites.map((item) => (
          <li key={item}>
            <FavouriteProduct product={item} />
          </li>
        ))}
      </div>
    </CenterContent>
  );
};

export default FavouritesList;
