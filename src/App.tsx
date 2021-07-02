import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalStyle } from './styles/global-styles';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
