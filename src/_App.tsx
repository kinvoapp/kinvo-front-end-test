import { AtivosProvider } from './AtivosContext';
import { Header } from "./components/Header";
// import { Sidebar } from '../src/components/Sidebar'


import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./styles/styles";
import { Corpo } from './components/Corpo';



export function App() {
  return (
    <div className="App">
      <AtivosProvider>
        <Header />
          <Corpo>
            {/* <Sidebar /> */}
            <Dashboard />
          </Corpo>
        <GlobalStyle />
      </AtivosProvider>
    </div>
  );
}


