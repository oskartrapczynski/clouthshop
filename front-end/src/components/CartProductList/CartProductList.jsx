import { CartProduct, CenterContent } from '@components';

import styles from './CartProductList.module.css';

const CartProductList = ({ products }) => {
  return (
    <CenterContent>
      <div className={styles.favouritesList}>
        <h2>Koszyk</h2>
        {products.map((item) => (
          <CartProduct key={item.id} product={item} />
        ))}
      </div>
    </CenterContent>
  );
};

export default CartProductList;
