import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import GlobalStyles from './styles/global';

import { defaultTheme } from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
