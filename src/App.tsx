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
      <div className="App">Hello world</div>
    </ThemeProvider>
  );
}

export default App;
