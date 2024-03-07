import { Outlet } from 'react-router-dom';
import {
  Footer,
  MainMenu,
  Logo,
  CurrencySelector,
  IconMenu,
  TopBar,
  CategoryMenu,
  MainContent,
} from '..';
import { CurrencyContext, CartContext } from '@contexts';
import { CURRENCIES } from '@constants';
import { getJSONToLocalStorage, setJSONToLocalStorage } from '@utils';
import { useLocalStorage } from '@hooks';
import { useContext, useState } from 'react';

const Layout = () => {
  const [currency, setCurrency] = useLocalStorage(
    'selected_currency',
    CURRENCIES.PLN
  );
  const [cartItems, setCartItems] = useLocalStorage('cart_products', []);

  const addProductToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
  };

  return (
    <CartContext.Provider value={[cartItems, addProductToCart]}>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <MainContent>
          <TopBar>
            <MainMenu />
            <Logo />
            <div>
              <CurrencySelector />
              <IconMenu />
            </div>
          </TopBar>
          <CategoryMenu />
          <Outlet />
        </MainContent>
        <Footer />
      </CurrencyContext.Provider>
    </CartContext.Provider>
  );
};

export default Layout;
