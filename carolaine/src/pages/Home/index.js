import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import {
  Main,
  Container,
  Title,
  Indicativos,
  Indicativo,
  IndicativoTitulo,
  IndicativoValor,
} from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Container>
          <Title>Renda Fixa</Title>

          <Indicativos>
            <Indicativo>
              <IndicativoTitulo>Saldo Bruto</IndicativoTitulo>
              <IndicativoValor>R$ 56533</IndicativoValor>
            </Indicativo>

            <Indicativo>
              <IndicativoTitulo>Valor Aplicado</IndicativoTitulo>
              <IndicativoValor>R$ 56533</IndicativoValor>
            </Indicativo>

            <Indicativo>
              <IndicativoTitulo>Resultado</IndicativoTitulo>
              <IndicativoValor>R$ 56533</IndicativoValor>
            </Indicativo>

            <Indicativo>
              <IndicativoTitulo>Rentabilidade</IndicativoTitulo>
              <IndicativoValor>69,98%</IndicativoValor>
            </Indicativo>

            <Indicativo>
              <IndicativoTitulo>CDI</IndicativoTitulo>
              <IndicativoValor>69,98%</IndicativoValor>
            </Indicativo>

            <Indicativo>
              <IndicativoTitulo>0% Sobre CDI</IndicativoTitulo>
              <IndicativoValor>69,98%</IndicativoValor>
            </Indicativo>
          </Indicativos>
        </Container>
      </Main>
    </>
  );
};

export default Home;
