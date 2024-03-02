import styles from './Products.module.css';
import { CenterContent, Product } from '@components';

const Products = ({ products, headerText }) => {
  return (
    <CenterContent>
      <h2 className={styles.bestsellersHeader}> {headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </CenterContent>
  );
};

export default Products;
