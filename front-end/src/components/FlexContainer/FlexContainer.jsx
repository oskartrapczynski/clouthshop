import styles from './FlexContainer.module.css';

const FlexContainer = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export default FlexContainer;
