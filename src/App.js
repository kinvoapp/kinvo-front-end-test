import { ThemeProvider } from "styled-components";
import FixedIncomeProvider from "./context/FixedIncome";

import GlobalStyles, { Container } from "./styles/global";
import theme from "./styles/theme";

import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Aside from "./components/Aside";

function App() {
  return (
    <FixedIncomeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Menu />
          <Aside />
          <Dashboard />
        </Container>
      </ThemeProvider>
    </FixedIncomeProvider>
  );
}

export default App;
