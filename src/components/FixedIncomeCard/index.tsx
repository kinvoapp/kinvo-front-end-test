import { Card } from "../Card";
import { Container, DueContainer, PositionContainer } from "./styles";

import { snapshotByProduct } from '../../contexts/income';
import { format } from "../../utils/format";

interface FixedIncomeCardProps {
  type: "title" | "results" | "due";
  snapshot: snapshotByProduct
}

export function FixedIncomeCard({ type, snapshot }: FixedIncomeCardProps) {

  if (type === 'title') return (
      <Container>
        <header>
          Titulo
        </header>

        <div className="content-card">
          <div className="title">
            {snapshot.fixedIncome.name}
          </div>

          <div className="info">
            <span className="info__title">Classe</span>
            <span className="info__content">{snapshot.fixedIncome.bondType}</span>
          </div>
        </div>
      </Container>
  )

  if (type === 'due') return (
      <DueContainer>
        <header>
          Vencimento
        </header>

        <div className="content-card due">
          <div className="title">
            <span className="title__due">Data venc.</span>
            <span className="title__content">{snapshot.due.date.replaceAll('/', '.')}</span>
          </div>

          <div className="info">
            <span className="info__title">Dias até Venc.</span>
            <span className="info__content">{snapshot.due.daysUntilExpiration}</span>
          </div>
        </div>
      </DueContainer>
  )

  if (type === 'results') return (
      <PositionContainer>
        <header>
          Resultado
        </header>

        <div className="content-card result">
          <div className="title">
            <span className="title__result">Valor Inves.</span>
            <span className="title__content">{format(snapshot.position.valueApplied)}</span>
          </div>
          <div className="title">
            <span className="title__result">Saldo Bruto</span>
            <span className="title__content">{format(snapshot.position.equity)}</span>
          </div>
          <div className="title">
            <span className="title__result">Rent.</span>
            <span className="title__content">{snapshot.position.profitability}%</span>
          </div>
          <div className="title">
            <span className="title__result">% da cart.</span>
            <span className="title__content">{snapshot.position.portfolioPercentage}%</span>
          </div>
          <div className="title">
            <span className="title__result">{snapshot.position.indexerLabel}</span>
            <span className="title__content">{snapshot.position.indexerValue}</span>
          </div>
          <div className="title">
            <span className="title__result">% sobre CDI</span>
            <span className="title__content">{snapshot.position.percentageOverIndexer}%</span>
          </div>

        </div>
      </PositionContainer>
  )

  return (
    <h1>error</h1>
  )
}