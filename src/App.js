import { GlobalStyle } from "./styles/GlobalStyle";
import { Routes } from "./routes";
import { Layout } from "./components/Layout";
import "react-toastify/dist/ReactToastify.css";

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
