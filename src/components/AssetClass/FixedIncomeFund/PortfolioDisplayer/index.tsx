//--------------------------------------------------------------------< hooks >
import { useContext } from "react";
//--------------------------------------------------------------------< utils >
import { formatNumber } from "../../../../utils/formatNumber";
//-------------------------------------------------------------------< styles >
import { Container, PortfolioContainer } from "./styles";
//--------------------------------------------------------------------< types >
import { PortfolioContext } from "../../../../contexts/PortfolioContext";
//===================================================[ < PortfolioDisplayer > ]
export function PortfolioDisplayer() {
  //-------------------------------------------------------------< properties >
  const { portfolio, error, loaded } = useContext(PortfolioContext);
  //-----------------------------------------------------------------< return >
  return (
    <Container>
      {!error && loaded && (
        <>
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
        </>
      )}
    </Container>
  );
}
