import styles from './CenterContent.module.css';
const CenterContent = ({ children }) => {
  return <div className={styles.centerContent}>{children}</div>;
};

export default CenterContent;
