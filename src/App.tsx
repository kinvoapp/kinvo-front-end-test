//---------------------------------------------------------------< components >
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
//-----------------------------------------------------------------< contexts >
import { ThemeProvider } from "styled-components";
//-------------------------------------------------------------------< styles >
import defaultTheme from "./styles/themes/default";
import GlobalStyles from "./styles/global";
import { FixedIncomeFund } from "./components/AssetClass/FixedIncomeFund";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Menu />
      <FixedIncomeFund />
    </ThemeProvider>
  );
}

export default App;
