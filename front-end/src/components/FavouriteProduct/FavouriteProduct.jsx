import styles from './FavouriteProduct.module.css';
import { Price } from '@components';
import { BAG_ICON, REMOVE_ICON } from '@assets';
import { CartContext } from '@contexts';
import { useFetcher } from 'react-router-dom';
import { useContext } from 'react';

const FavouriteProduct = ({ favourite }) => {
  const [, addProductToCart] = useContext(CartContext);
  const product = favourite.product;
  const { Form } = useFetcher();

  const price = <Price product={product} />;

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <Form
            method="DELETE"
            action={`/delete-from-favourites/${favourite.id}`}
          >
            <button>
              <img src={REMOVE_ICON} />
              Usuń
            </button>
          </Form>
          <button onClick={() => addProductToCart(product)}>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
