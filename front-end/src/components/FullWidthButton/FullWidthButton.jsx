import styles from './FullWidthButton.module.css';

const FullWidthButton = ({ children, onClick, isBlack }) => {
  return (
    <button
      className={`${styles.button} ${isBlack ? styles.black : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FullWidthButton;
