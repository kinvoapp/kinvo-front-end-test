import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Incomes from "../../components/Incomes";
import Indexes from "../../components/Indexes";
import ChartProfitability from "../../components/ChartProfitability";
import {
  Main,
  Container,
  PageTitle,
  Title,
  Rentabilidade,
  Colunas,
} from "./style";

const Home = () => {
  const [dados, setDados] = useState();

  useEffect(() => {
    const fetchDados = async () => {
      await axios
        .get(
          "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
        )
        .then(function (response) {
          setDados(() => {
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

          <Indexes data={dados} />

          <ChartProfitability data={dados} />

          <Incomes data={dados} />

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
