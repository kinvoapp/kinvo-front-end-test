import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Main, Container } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Container>conteudo</Container>
      </Main>
    </>
  );
};

export default Home;
