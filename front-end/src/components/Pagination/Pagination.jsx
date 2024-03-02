import styles from './Pagination.module.css';
import { NavLink } from 'react-router-dom';

const Pagination = ({ numberOfPages }) => {
  const pages = Array(numberOfPages).fill(null);
  return (
    <ul className={styles.pagination}>
      {pages.map((_, index) => (
        <li key={index}>
          <NavLink>{index + 1}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
