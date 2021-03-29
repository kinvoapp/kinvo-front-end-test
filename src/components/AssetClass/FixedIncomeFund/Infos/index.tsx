//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../../../utils/formatNumber";
//--------------------------------------------------------------------< mocks >
import snapshotByPortfolio from "../../../../mocks/snapshotByPortfolio.json";
//-------------------------------------------------------------------< styles >
import { Container, Info } from "./styles";
//--------------------------------------------------------------------< types >
import { Portfolio } from "../../../../types/Portfolio";
//================================================================[ < Infos > ]
export function Infos() {
  //-------------------------------------------------------------< properties >
  const [portfolio] = useState<Portfolio>(snapshotByPortfolio);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <Info>
        <p>
          SALDO BRUTO
          <strong>R$ {formatNumber(portfolio.equity)}</strong>
        </p>
      </Info>

      <Info>
        <p>
          VALOR APLICADO
          <strong>R$ {formatNumber(portfolio.valueApplied)}</strong>
        </p>
      </Info>

      <Info>
        <p>
          RESULTADO
          <strong>R$ {formatNumber(portfolio.equityProfit)}</strong>
        </p>
      </Info>

      <Info>
        <p>
          RENTABILIDADE
          <strong>{formatNumber(portfolio.percentageProfit)}%</strong>
        </p>
      </Info>

      <Info>
        <p>
          CDI
          <strong>{formatNumber(portfolio.indexerValue)}%</strong>
        </p>
      </Info>

      <Info>
        <p>
          % SOBRE CDI
          <strong>{formatNumber(portfolio.percentageOverIndexer)}%</strong>
        </p>
      </Info>
    </Container>
  );
}
