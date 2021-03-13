import { ThemeProvider } from "styled-components";

import GlobalStyles, { Container } from "./styles/global";
import theme from "./styles/theme";

import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Menu />
          <Aside />
          <Dashboard />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
