import styles from './Bestsellers.module.css';
import { CenterContent, Product } from '@components';

const Bestsellers = ({ products }) => {
  return (
    <CenterContent>
      <h2 className={styles.bestsellersHeader}> Sprawdź nasze bestsellery</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </CenterContent>
  );
};

export default Bestsellers;
