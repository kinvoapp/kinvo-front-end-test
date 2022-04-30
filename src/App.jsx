import './App.css';
import { Header } from './components/Header/index'
import { GlobalStyle } from "./styles/global";

import { Dashboard } from './components/Dashboard/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <GlobalStyle />
    </div>
  );
}

export default App;
