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

const Layout = ({ children }) => {
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
        {children}
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;
