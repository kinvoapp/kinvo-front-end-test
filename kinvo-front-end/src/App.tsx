import Header from './components/Header/Header';
import GlobalStyle from './assets/styles/global';
import SideMenu from './components/SideMenu/SideMenu';
import Content from './components/Content/Content';


function App() {
  

  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <SideMenu/>
      <Content/>
    </div>
  );
}

export default App;
