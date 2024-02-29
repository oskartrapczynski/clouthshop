import styles from './IconMenu.module.css';
import { BAG_ICON, HEART_ICON } from '@assets';
import { Link } from 'react-router-dom';

const IconMenu = () => {
  const cartItems = 2;
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/ulubione">
          <img src={HEART_ICON} alt="" />
        </Link>
      </li>
      <li>
        <Link to="/koszyk">
          <img src={BAG_ICON} alt="" />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
};

export default IconMenu;
