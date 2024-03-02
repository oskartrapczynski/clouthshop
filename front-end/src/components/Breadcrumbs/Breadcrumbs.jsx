import styles from './Breadcrumbs.module.css';
import { ARROW_ICON } from '@assets';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = () => {
  const breadcrumbs = [
    { categoryName: 'Kobieta', path: 'kobieta' },
    { categoryName: 'Odzież', path: 'odziez' },
    { categoryName: 'Swetry', path: 'swetry' },
  ];
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => (
        <li key={breadcrumb.path}>
          <NavLink to={breadcrumb.path}>
            {breadcrumb.categoryName}
            <img src={ARROW_ICON} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
