import { AtivosProvider } from './AtivosContext';
import { Header } from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { GlobalStyle } from "./styles/styles";

// import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
      <div className="App">
        <AtivosProvider>
          <Header />          
             {/* <Sidebar />  */}
            <Dashboard /> 

    
          <GlobalStyle />
        </AtivosProvider>
      </div>
  );
}


