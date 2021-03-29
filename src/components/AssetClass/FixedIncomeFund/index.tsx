//---------------------------------------------------------------< components >
import { Infos } from "./Infos";
import { Chart } from "./Chart";
import { FixedIncome } from "./FixedIncome";
import { PortfolioDivision } from "./PortfolioDivision";
//-------------------------------------------------------------------< styles >
import { Container } from "./styles";
//======================================================[ < FixedIncomeFund > ]
export function FixedIncomeFund() {
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <h1>Renda Fixa</h1>
      <Infos />
      <Chart />
      <FixedIncome />
      <PortfolioDivision />
    </Container>
  );
}
