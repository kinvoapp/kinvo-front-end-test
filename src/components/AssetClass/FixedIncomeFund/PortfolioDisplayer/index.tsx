//--------------------------------------------------------------------< hooks >
import { useState } from "react";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../../../utils/formatNumber";
//--------------------------------------------------------------------< mocks >
import snapshotByPortfolio from "../../../../mocks/snapshotByPortfolio.json";
//-------------------------------------------------------------------< styles >
import { Container, PortfolioContainer } from "./styles";
//--------------------------------------------------------------------< types >
import { Portfolio } from "../../../../types/Portfolio";
//===================================================[ < PortfolioDisplayer > ]
export function PortfolioDisplayer() {
  //-------------------------------------------------------------< properties >
  const [portfolio] = useState<Portfolio>(snapshotByPortfolio);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      <PortfolioContainer>
        <p>
          SALDO BRUTO
          <strong>R$ {formatNumber(portfolio.equity)}</strong>
        </p>
      </PortfolioContainer>

      <PortfolioContainer>
        <p>
          VALOR APLICADO
          <strong>R$ {formatNumber(portfolio.valueApplied)}</strong>
        </p>
      </PortfolioContainer>

      <PortfolioContainer>
        <p>
          RESULTADO
          <strong>R$ {formatNumber(portfolio.equityProfit)}</strong>
        </p>
      </PortfolioContainer>

      <PortfolioContainer>
        <p>
          RENTABILIDADE
          <strong>{formatNumber(portfolio.percentageProfit)}%</strong>
        </p>
      </PortfolioContainer>

      <PortfolioContainer>
        <p>
          CDI
          <strong>{formatNumber(portfolio.indexerValue)}%</strong>
        </p>
      </PortfolioContainer>

      <PortfolioContainer>
        <p>
          % SOBRE CDI
          <strong>{formatNumber(portfolio.percentageOverIndexer)}%</strong>
        </p>
      </PortfolioContainer>
    </Container>
  );
}
