import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes } from "./routes";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}

export default App;
