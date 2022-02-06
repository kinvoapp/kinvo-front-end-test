import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Incomes from "../../components/Incomes";
import Indexes from "../../components/Indexes";
import StackedChart from "../../components/StackedChart";
import PieChart from "../../components/PieChart";
import { Main, Container, PageTitle, Columns } from "./style";

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          "https://60b6ad6f17d1dc0017b882fd.mockapi.io/mock/getFixedIncomeClassData"
        )
        .then(function (response) {
          setData(() => {
            return response.data;
          });
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <Header data={data} />
      <Main>
        <Sidebar />
        <Container>
          <PageTitle>Renda Fixa</PageTitle>

          <Indexes data={data} />

          <StackedChart data={data} title="Rentabilidade dos Títulos" />

          <Incomes data={data} />

          <Columns>
            <PieChart data={data} title="Divisão de Carteira por Tipos" />

            <PieChart data={data} title="Divisão de Carteira por Título" />
          </Columns>
        </Container>
      </Main>
    </>
  );
};

export default Home;
