import styled from "styled-components";
import "./App.css";
import logo from "./assets/logoPremium.png";
import Sidebar from "./components/Sidebar/Sidebar";

import NavCardsWrapper from "./components/Navbar/NavCardsWrapper";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <NavCardsWrapper />
      </Header>
      <Main>
        <Sidebar />
        <Home />
      </Main>
    </div>
  );
}

const Header = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #fff;
  align-items: center;
  position: sticky;
  top: 0;
  box-shadow: 0 1px 5px #9c9db94d;
`;

const Logo = styled.image`
  background-position: center;
  background-image: url(${logo});
  background-repeat: no-repeat;
  object-fit: contain;
  height: 100%;
  width: 400px;
  display: table;
  float: left;
`;

const Main = styled.section`
  display: flex;
`;

export default App;
