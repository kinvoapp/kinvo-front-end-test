import React from 'react';
import styled from 'styled-components';
import {Card, Label, Result, BorderIn} from './Card';
import {formatCoin} from '../utils.js';


const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

function Portfolio(props){
  return(
    <PortfolioContainer>
      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>Saldo Bruto</Label>
          <Result>R$ {formatCoin(props.portfolio.equity)}</Result>
        </div>
      </Card>

      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>Valor aplicado</Label>
          <Result>R$ {formatCoin(props.portfolio.valueApplied)}</Result>
        </div>
      </Card>

      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>Resultado</Label>
          <Result>R$ {formatCoin(props.portfolio.equityProfit)}</Result>
        </div>
      </Card>

      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>Rentabilidade</Label>
          <Result>{props.portfolio.percentageProfit}%</Result>
        </div>
      </Card>

      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>cdi</Label>
          <Result>{props.portfolio.indexerValue}%</Result>
        </div>
      </Card>

      <Card small>
        <BorderIn></BorderIn>
        <div>
          <Label>% sobre cdi</Label>
          <Result>{props.portfolio.percentageOverIndexer}%</Result>
        </div>
      </Card>
    </PortfolioContainer> 
  );
}

export default Portfolio;