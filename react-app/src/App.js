import styled from "styled-components";
import "./App.css";
import logo from "./assets/logoPremium.png";
import Sidebar from "./components/Sidebar/Sidebar";
import HeaderCardsWrapper from "./components/Header/HeaderCardsWrapper";
import AreaChart from "./components/Charts/AreaChart";
import ProductsList from "./components/Products/ProductsList";
import PieChartsWrapper from "./components/Charts/PieChartsWrapper";

import NavCardsWrapper from "./components/Navbar/NavCardsWrapper";

function App() {
  return (
    <div>
      <Header>
        <Logo />
        <NavCardsWrapper />
      </Header>
      <Wrapper>
        <Sidebar />
        <ContentWrapper>
          <HeaderCardsWrapper />
          <AreaChart />
          <ProductsList />
          <PieChartsWrapper />
        </ContentWrapper>
      </Wrapper>
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

const Wrapper = styled.section`
  display: flex;
`;

const ContentWrapper = styled.section`
  padding: 38px;
  width: 1090px;
  margin-left: 5vw;
`;

export default App;
