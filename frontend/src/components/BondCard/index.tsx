import React from 'react';

import { BondCardItem, ValueList, ValueItem } from './styles';

import { formatToCurrency } from '../../utils/formatters';

import { SnapshotByProduct } from '../../interfaces/api.interface';

const BondCard: React.FC<SnapshotByProduct> = ({
  due,
  fixedIncome,
  position
}: SnapshotByProduct) => {
  const { name, bondType } = fixedIncome;

  const {
    equity,
    indexerValue,
    percentageOverIndexer,
    portfolioPercentage,
    profitability,
    valueApplied
  } = position;

  return (
    <>
      {/** Bond */}
      <BondCardItem className="bond">
        <header>
          <h3>Título</h3>

          <div className="tooltip">
            <span className="info">Teste de informação</span>
          </div>
        </header>

        <ValueList>
          <h3>{name}</h3>
          <ValueItem>
            <h4>Classe</h4>
            <p className="bondType">{bondType}</p>
          </ValueItem>
        </ValueList>
      </BondCardItem>

      {/** Position */}
      <BondCardItem className="position">
        <header>
          <h3>Minha Posição</h3>

          <div className="tooltip">
            <span className="info">Teste de informação</span>
          </div>
        </header>

        <ValueList>
          <ValueItem>
            <h4>Valor Inves.</h4>
            <p>{formatToCurrency(valueApplied)}</p>
          </ValueItem>

          <ValueItem>
            <h4>Saldo Bruto</h4>
            <p>{formatToCurrency(equity)}</p>
          </ValueItem>

          <ValueItem>
            <h4>Rent.</h4>
            <p>{formatToCurrency(profitability)}%</p>
          </ValueItem>

          <ValueItem>
            <h4>% da Cart.</h4>
            <p>{formatToCurrency(portfolioPercentage)}%</p>
          </ValueItem>

          <ValueItem>
            <h4>CDI</h4>
            <p>{formatToCurrency(indexerValue)}</p>
          </ValueItem>

          <ValueItem>
            <h4>Sobre CDI</h4>
            <p>{formatToCurrency(percentageOverIndexer)}</p>
          </ValueItem>
        </ValueList>
      </BondCardItem>

      {/** Due */}
      <BondCardItem className="due">
        <header>
          <h3>Vencimento</h3>

          <div className="tooltip">
            <span className="info">Teste de informação</span>
          </div>
        </header>

        <ValueList>
          <ValueItem>
            <h4>Data Venc.</h4>
            <p>{due?.date}</p>
          </ValueItem>

          <ValueItem>
            <h4>Dias Até Venc.</h4>
            <p>{due?.daysUntilExpiration}</p>
          </ValueItem>
        </ValueList>
      </BondCardItem>
    </>
  );
};

export default BondCard;
