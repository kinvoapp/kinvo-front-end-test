import { MenuLateral } from './components/MenuLateral';
import { Header } from './components/Header';
import { Cards } from './components/Cards';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MenuLateral />
      <Cards />
    </>
  );
}
