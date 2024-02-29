import { NavLink } from 'react-router-dom';
import styles from './MainMenu.module.css';
import { GENDERS } from '@constants';

const MainMenu = () => {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {item.categoryName}
        </NavLink>
      ))}
    </ul>
  );
};

export default MainMenu;
