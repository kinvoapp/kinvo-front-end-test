import React from "react";
import HeaderCardsWrapper from "../components/Header/HeaderCardsWrapper";
import AreaChart from "../components/Charts/AreaChart";
import ProductsList from "../components/Products/ProductsList";
import DoughnutChartsWrapper from "../components/Charts/DoughnutChartsWrapper";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <HeaderCardsWrapper />
      <AreaChart />
      <ProductsList />
      <DoughnutChartsWrapper />
    </Container>
  );
};

const Container = styled.section`
  padding: 38px;
  width: 1090px;
  margin-left: 5vw;
`;

export default Home;
