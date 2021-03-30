import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import FixedIncome from 'pages/FixedIncome';

const AppWrapper = styled.div`
  /* max-width: 136.6rem; */
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'menu   content';
`;

const Header = styled.div`
  grid-area: header;
  width: 100%;
  height: 9rem;
  background-color: #fff;
`;

const Menu = styled.div`
  grid-area: menu;
  width: 27rem;
  height: 100%;
  background-color: #fff;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
        <Menu />
        <FixedIncome />
      </AppWrapper>
    </>
  );
}

export default App;
