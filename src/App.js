import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>exemple</div>
      </ThemeProvider>
    </>
  );
}

export default App;
