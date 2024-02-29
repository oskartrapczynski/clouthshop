import styles from './CategoryMenu.module.css';
import { NavLink } from 'react-router-dom';
import { CATEGORIES } from '@constants';

const CategoryMenu = () => {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => (
          <li key={path}>
            <NavLink to={path}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
