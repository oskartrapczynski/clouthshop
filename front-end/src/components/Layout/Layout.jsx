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

const Layout = () => {
  return (
    <>
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
    </>
  );
};

export default Layout;
