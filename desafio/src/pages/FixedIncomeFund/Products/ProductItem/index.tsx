import React from 'react';

import { SnapshotByProduct } from '../../../../@types/SnapshotByProduct';
import { parseCurrency, parsePercentage } from '../../../../utils';
import {
  BondTypeContainer,
  CardDue,
  CardPosition,
  CardName,
  Container,
  DueContainer,
  NameContainer,
  PositionContainer
} from './styles';

interface ProductItemProps {
  product: SnapshotByProduct;
  invert?: boolean;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  invert
}) => {
  return (
    <Container invert={invert}>
      <CardName info="Título">
        <NameContainer>
          <h5>{product.fixedIncome.name}</h5>
        </NameContainer>

        <BondTypeContainer>
          <span>Classe</span>
          <h5>{product.fixedIncome.bondType}</h5>
        </BondTypeContainer>
      </CardName>

      <CardPosition info="Minha Posição">
        <PositionContainer>
          <span>Valor Inves.</span>
          <h5>
            {parseCurrency(product.position.valueApplied, { symbol: false })}
          </h5>
        </PositionContainer>

        <PositionContainer>
          <span>Saldo Bruto</span>
          <h5>{parseCurrency(product.position.equity, { symbol: false })}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>Rent.</span>
          <h5>{parsePercentage(product.position.profitability)}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>% da Cart.</span>
          <h5>{parsePercentage(product.position.portfolioPercentage)}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>{product.position.indexerLabel}</span>
          <h5>
            {parsePercentage(product.position.indexerValue, { symbol: false })}
          </h5>
        </PositionContainer>

        <PositionContainer>
          <span>Sobre CDI</span>
          <h5>
            {parsePercentage(product.position.percentageOverIndexer, {
              symbol: false
            })}
          </h5>
        </PositionContainer>
      </CardPosition>

      <CardDue info="Vencimento">
        <DueContainer>
          <span>Data Venc.</span>
          <h5>{product.due.date}</h5>
        </DueContainer>

        <DueContainer>
          <span>Dias Até Venc.</span>
          <h5>{product.due.daysUntilExpiration}</h5>
        </DueContainer>
      </CardDue>
    </Container>
  );
};
