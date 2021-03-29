import styled from 'styled-components';
import GlobalStyle from './globalStyles';
import FixedIncome from 'pages/FixedIncome';

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header header'
    'menu   content';
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <FixedIncome />
      </AppWrapper>
    </>
  );
}

export default App;
