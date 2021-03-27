import Header from "./componentes/Header";
import NavVertical from "./componentes/NavVertical";
import { ContentApp, WrapperApp, WrapperMenu } from "./styles";

function App() {
  return (
    <WrapperApp>
      <Header />
      <WrapperMenu>
        <NavVertical />
      </WrapperMenu>
      <ContentApp>
        <h1 style={{ coler: 'red' }}>oi</h1>
      </ContentApp>
    </WrapperApp>
  );
}

export default App;
