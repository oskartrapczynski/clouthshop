import React from 'react';
import { useContext } from 'react';
import { CURRENCIES, CURRENCY_SIGN } from '@constants';
import { CurrencyContext } from '@contexts';

const Price = ({ product }) => {
  const [currency] = useContext(CurrencyContext);
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {CURRENCY_SIGN[currency]}
    </>
  );
};

export default Price;
