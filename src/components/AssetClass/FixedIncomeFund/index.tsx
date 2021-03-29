//---------------------------------------------------------------< components >
import { PortfolioDisplayer } from "./PortfolioDisplayer";
import { Chart } from "./Chart";
import { FixedIncome } from "./FixedIncome";
import { PortfolioDivision } from "./PortfolioDivision";
//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//-----------------------------------------------------------------< contexts >
import { MenuContext } from "../../../contexts/MenuContext";
//-------------------------------------------------------------------< styles >
import { Container } from "./styles";
//======================================================[ < FixedIncomeFund > ]
export function FixedIncomeFund() {
  //-------------------------------------------------------------< properties >
  const { visibility } = useContext(MenuContext);
  //-----------------------------------------------------------------< return >
  return (
    <Container className={visibility}>
      <h1>Renda Fixa</h1>
      <PortfolioDisplayer />
      <Chart />
      <FixedIncome />
      <PortfolioDivision />
    </Container>
  );
}
