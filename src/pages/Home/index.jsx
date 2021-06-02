import {
  Container,
  RentabilityTitleContainer,
  GraphContainer,
  GraphCard,
  GraphCardTitle,
  GraphCardBody,
  GraphCardFooter,
} from "./styles";

import { IncomeMenu } from "../../components/IncomeMenu";

import TitleRentabilityImg from "../../assets/titleRentability.svg";

import { MyFixedIncomes } from "../../components/MyFixedIncomes";
import { ChartCard } from "../../components/GraphCard";

export function Home() {
  return (
    <Container>
      <h1>Renda fixa</h1>
      <IncomeMenu />
      <RentabilityTitleContainer>
        <img src={TitleRentabilityImg} alt="Rentabilidade dos Títulos" />
      </RentabilityTitleContainer>
      <MyFixedIncomes />
      <GraphContainer>
        <ChartCard title="Divisão de Carteira por Tipos" itemsName="Tipo" />
        <ChartCard title="Divisão de Carteira por Título" itemsName="Título" />
      </GraphContainer>
    </Container>
  );
}
