import styles from './CurrencySelector.module.css';
import { CURRENCIES } from '@constants';
import { CurrencyContext } from '@contexts';
import { useContext } from 'react';

const CurrencySelector = () => {
  const [currency, setCurrency] = useContext(CurrencyContext);

  const handleChange = (e) => {
    setCurrency(e.currentTarget.value);
    localStorage['selected_currency'] = e.currentTarget.value;
  };

  return (
    <select
      value={currency}
      onChange={handleChange}
      className={styles.currencySelector}
    >
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
};

export default CurrencySelector;
