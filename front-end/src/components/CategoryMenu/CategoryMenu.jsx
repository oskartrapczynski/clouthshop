import styles from './CategoryMenu.module.css';
import { NavLink, useParams } from 'react-router-dom';
import { CATEGORIES } from '@constants';

const CategoryMenu = () => {
  const params = useParams();
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map(({ categoryName, path }) => (
          <li key={path}>
            <NavLink to={`/${params.gender}/${path}`}>{categoryName}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
