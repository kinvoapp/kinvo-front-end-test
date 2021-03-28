import Header from "./componentes/Header";
import NavVertical from "./componentes/NavVertical";
import RendaFixa from "./pages/RendaFixa";
import { ContentApp, WrapperApp, WrapperMenu } from "./styles";

function App() {
  return (
    <WrapperApp>
      <Header />
      <WrapperMenu>
        <NavVertical />
      </WrapperMenu>
      <ContentApp>
        <RendaFixa />
      </ContentApp>
    </WrapperApp>
  );
}

export default App;
