import styles from './FavouritesList.module.css';
import { FavouriteProduct, CenterContent } from '@components';

const FavouritesList = () => {
  const favourites = [
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
    {
      id: 1,
      gender: 'men',
      category: 'odziez',
      subcategory: 'koszulki',
      productName: 'T-Shirt',
      brand: 'Top Brand',
      pricePLN: 49,
      priceUSD: 10,
      photos: [
        'http://localhost:3000/product-photos/man-t-shirt-1.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-4.jpg',
        'http://localhost:3000/product-photos/man-t-shirt-3.jpg',
      ],
      description:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.',
      maintenanceInfo:
        'Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu',
    },
  ];
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
