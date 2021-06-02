import { Container } from "./styles";
import { IncomeItem } from "./IncomeItem";
import { formatMoney } from "../../utils/formatMoney";

export function IncomeMenu({ data }) {
  return (
    <Container>
      <IncomeItem title="SALDO BRUTO" value={formatMoney(data.equity)} />
      <IncomeItem title="VALOR APLICADO" value={formatMoney(data.valueApplied)} />
      <IncomeItem title="RESULTADO" value={formatMoney(data.equityProfit)} />
      <IncomeItem title="RENTABILIDADE" value={`${data.percentageProfit}%`} />
      <IncomeItem title="CDI" value={`${data.indexerValue}%`} />
      <IncomeItem title="% SOBRE CDI" value={`${data.percentageOverIndexer}%`} />
    </Container>
  );
}
