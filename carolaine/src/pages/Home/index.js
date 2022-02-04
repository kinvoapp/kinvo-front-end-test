import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Rendas from "../../components/Rendas";
import {
  Main,
  Container,
  PageTitle,
  Title,
  Indicativos,
  Indicativo,
  IndicativoTitulo,
  IndicativoValor,
  Rentabilidade,
  Colunas,
} from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Container>
          <PageTitle>Renda Fixa</PageTitle>

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

          <Rentabilidade>
            <Title>Rentabilidade dos Títulos</Title>
            <p>gráfico</p>
          </Rentabilidade>

          <Rentabilidade>
            <Title>Minhas Rendas Fixas</Title>
            <Rendas />
          </Rentabilidade>

          <Colunas>
            <Rentabilidade>
              <Title>Divisão de Carteira por Tipos</Title>
              <p>gráfico</p>
            </Rentabilidade>

            <Rentabilidade>
              <Title>Divisão de Carteira por Título</Title>
              <p>gráfico</p>
            </Rentabilidade>
          </Colunas>
        </Container>
      </Main>
    </>
  );
};

export default Home;
