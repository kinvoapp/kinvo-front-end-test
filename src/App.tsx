//---------------------------------------------------------------< components >
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { FixedIncomeFund } from "./components/AssetClass/FixedIncomeFund";
//-----------------------------------------------------------------< contexts >
import { ThemeProvider } from "styled-components";
import { MenuProvider } from "./contexts/MenuContext";
//-------------------------------------------------------------------< styles >
import defaultTheme from "./styles/themes/default";
import GlobalStyles from "./styles/global";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <ThemeProvider theme={defaultTheme}>
      <MenuProvider>
        <GlobalStyles />
        <Header />
        <Menu />
        <FixedIncomeFund />
      </MenuProvider>
    </ThemeProvider>
  );
}

export default App;
