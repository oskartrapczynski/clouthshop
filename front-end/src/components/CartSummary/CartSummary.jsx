import styles from './CartSummary.module.css';
import { FullWidthButton } from '@components';
import { CAR_ICON } from '@assets';

const CartSummary = ({ products }) => {
  const deliveryPrice = 49;

  const minSumForFreeDelivery = 500;

  let sum = 0;
  products.forEach((item) => (sum += item.pricePLN));

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryPrice;
  const deliveryCost = sum > minSumForFreeDelivery ? 0 : deliveryPrice;

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktów:</p>
        <p>{sum}</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy:</p>
        <p>{deliveryCost}</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty:</p>
        <p>{totalCost}</p>
      </div>
      <FullWidthButton isBlack>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} />
        <p>Darmowa dostawa od {minSumForFreeDelivery}zł</p>
      </div>
    </div>
  );
};

export default CartSummary;
