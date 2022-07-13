import { useContext } from "react";
import { IncomeContext } from "../../contexts/income";
import { CardInfoSmall } from "../CardInfoSmall";
import { Container } from "./styles";

export function SmallInfoSection() {
  const { fullData } = useContext(IncomeContext);
  return (
    <Container>
      <CardInfoSmall 
        title="Saldo bruto" 
        description={fullData.snapshotByPortfolio.equity} 
        type="currency"
      />
      <CardInfoSmall 
        title="Valor aplicado" 
        description={fullData.snapshotByPortfolio.valueApplied} 
        type="currency"
      />
      <CardInfoSmall 
        title="Resultado" 
        description={fullData.snapshotByPortfolio.equityProfit} 
        type="currency"
      />
      <CardInfoSmall 
        title="Rentabilidade" 
        description={fullData.snapshotByPortfolio.percentageProfit} 
        type="percentage"
      />
      <CardInfoSmall 
        title="CDI" 
        description={fullData.snapshotByPortfolio.indexerValue} 
        type="percentage"
      />
      <CardInfoSmall 
        title="% Sobre CDI" 
        description={fullData.snapshotByPortfolio.percentageOverIndexer} 
        type="percentage"
      />
    </Container>
  )
}