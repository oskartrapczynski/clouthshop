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
import { CurrencyContext } from '@contexts';
import { CURRENCIES } from '@constants';
import { useState } from 'react';

const Layout = () => {
  const [currency, setCurrency] = useState(
    localStorage['selected_currency'] || CURRENCIES.PLN
  );
  return (
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
  );
};

export default Layout;
