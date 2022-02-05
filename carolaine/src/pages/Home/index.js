import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Home = () => {
  const [dados, setDados] = useState();

  useEffect(() => {
    const fetchDados = async () => {
      await axios
        .get(
          "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
        )
        .then(function (response) {
          setDados((state) => {
            return response.data;
          });
        });
    };

    fetchDados();
  }, []);

  return (
    <>
      <Header data={dados} />
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

          <Rendas data={dados} />

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
