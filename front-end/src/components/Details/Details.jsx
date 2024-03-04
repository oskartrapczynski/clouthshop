import styles from './Details.module.css';
import { FullWidthButton, Accordion } from '@components';
import { CAR_ICON, RETURN_ICON } from '@assets';

const Details = ({ product }) => {
  const accordionContent = [
    { title: 'Opis produktu', content: product.description },
    { title: 'Wskazwki pielęgnacyjne', content: product.maintenanceInfo },
  ];
  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN}zł</p>
      <FullWidthButton isBlack>Dodaj do koszyka</FullWidthButton>

      <ul className={styles.extraInfo}>
        <li>
          <img src={CAR_ICON} />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN_ICON} />
          Zwrot do 100 dni!
        </li>
      </ul>
      <Accordion items={accordionContent} />
    </div>
  );
};

export default Details;
