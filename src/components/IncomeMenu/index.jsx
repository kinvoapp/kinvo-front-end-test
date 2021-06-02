import { Container } from "./styles";
import { IncomeItem } from "./IncomeItem";

export function IncomeMenu() {
  return (
    <Container>
      <IncomeItem title="SALDO BRUTO" value="R$ 207.653,10" />
      <IncomeItem title="VALOR APLICADO" value="R$ 170.025,64" />
      <IncomeItem title="RESULTADO" value="R$ 37.638,46" />
      <IncomeItem title="RENTABILIDADE" value="25,08%" />
      <IncomeItem title="CDI" value="23,68%" />
      <IncomeItem title="% SOBRE CDI" value="320%" />
    </Container>
  );
}
