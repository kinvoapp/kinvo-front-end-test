import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { ToastContainer, toast } from "react-toastify";

import { Container, RentabilityTitleContainer, GraphContainer } from "./styles";

import { IncomeMenu } from "../../components/IncomeMenu";

import TitleRentabilityImg from "../../assets/titleRentability.svg";

import { MyFixedIncomes } from "../../components/MyFixedIncomes";
import { ChartCard } from "../../components/GraphCard";

export function Home() {
  const [incomeData, setIncomeData] = useState({
    equity: 0,
    equityProfit: 0,
    indexerValue: 0,
    percentageOverIndexer: 0,
    percentageProfit: 0,
    valueApplied: 0,
  });
  const [myFixedIncomesData, setMyFixedIncomesData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await api.get("/getFixedIncomeClassData");

        console.log(response);

        if (response.data.error) {
          toast.error("Ocorreu algum erro ao recuperar os dados!");
          return;
        }

        setIncomeData(response.data.data.snapshotByPortfolio);
        setMyFixedIncomesData(response.data.data.snapshotByProduct);
      } catch (error) {
        console.log(error);
        toast.error("Ocorreu algum erro ao recuperar os dados!");
      }
    }

    loadData();
  }, []);

  return (
    <Container>
      <h1>Renda fixa</h1>
      <IncomeMenu data={incomeData} />
      <RentabilityTitleContainer>
        <img src={TitleRentabilityImg} alt="Rentabilidade dos Títulos" />
      </RentabilityTitleContainer>
      <MyFixedIncomes data={myFixedIncomesData} />
      <GraphContainer>
        <ChartCard title="Divisão de Carteira por Tipos" itemsName="Tipo" />
        <ChartCard title="Divisão de Carteira por Título" itemsName="Título" />
      </GraphContainer>
      <ToastContainer />
    </Container>
  );
}
