import React from 'react';

import { SnapshotByProduct } from '../../../../@types/SnapshotByProduct';
import { Card } from '../../../../components';
import {
  BondTypeContainer,
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
      <Card info="Título">
        <NameContainer>
          <h5>{product.fixedIncome.name}</h5>
        </NameContainer>

        <BondTypeContainer>
          <span>Classe</span>
          <h5>{product.fixedIncome.bondType}</h5>
        </BondTypeContainer>
      </Card>

      <Card info="Minha Posição">
        <PositionContainer>
          <span>Valor Inves.</span>
          <h5>{product.position.valueApplied}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>Saldo Bruto</span>
          <h5>{product.position.equity}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>Rent.</span>
          <h5>{product.position.profitability}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>% da Cart.</span>
          <h5>{product.position.portfolioPercentage}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>{product.position.indexerLabel}</span>
          <h5>{product.position.indexerValue}</h5>
        </PositionContainer>

        <PositionContainer>
          <span>Sobre CDI</span>
          <h5>{product.position.percentageOverIndexer}</h5>
        </PositionContainer>
      </Card>

      <Card info="Vencimento">
        <DueContainer>
          <span>Data Venc.</span>
          <h5>{product.due.date}</h5>
        </DueContainer>

        <DueContainer>
          <span>Dias Até Venc.</span>
          <h5>{product.due.daysUntilExpiration}</h5>
        </DueContainer>
      </Card>
    </Container>
  );
};
