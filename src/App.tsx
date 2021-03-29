//---------------------------------------------------------------< components >
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { FixedIncomeFund } from "./components/AssetClass/FixedIncomeFund";
//-----------------------------------------------------------------< contexts >
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "./contexts/MenuContext";
import { PortfolioProvider } from "./contexts/PortfolioContext";
import { ProductsProvider } from "./contexts/ProductsContext";
//-------------------------------------------------------------------< styles >
import defaultTheme from "./styles/themes/default";
import GlobalStyles from "./styles/global";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuProvider>
        <PortfolioProvider>
          <ProductsProvider>
            <GlobalStyles />
            <Header />
            <Menu />
            <FixedIncomeFund />
          </ProductsProvider>
        </PortfolioProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
