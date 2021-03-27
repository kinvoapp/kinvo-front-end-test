//---------------------------------------------------------------< components >
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
//-----------------------------------------------------------------< contexts >
import { ThemeProvider } from "styled-components";
//-------------------------------------------------------------------< styles >
import defaultTheme from "./styles/themes/default";
import GlobalStyles from "./styles/global";
//==================================================================[ < App > ]
function App() {
  //-----------------------------------------------------------------< return >
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <Menu />
    </ThemeProvider>
  );
}

export default App;
