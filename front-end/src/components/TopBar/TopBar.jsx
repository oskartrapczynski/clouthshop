import styles from './TopBar.module.css';

const TopBar = ({ children }) => {
  return <div className={styles.topBar}>{children}</div>;
};

export default TopBar;
