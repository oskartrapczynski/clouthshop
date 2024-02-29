import styles from './FullWidthButton.module.css';

const FullWidthButton = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default FullWidthButton;
