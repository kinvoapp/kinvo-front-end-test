import React from 'react';

import {
  ProductLabel,
  SmallSetOfInfo,
  SmallSetOfInfoValue,
  SmallSetOfInfoLabel,
  Container,
  MiddleContainer,
  EndContainer,
} from './styles';
import { styleMoney } from '../../../../../../../../../../shared/FunctionsLibrary';

function FundsProduct(props) {
  const {
    productName,
    amount,
    averagePrice,
    lastQuotation,
    lastTwelveMonthYeld,
    equity,
    currentMonthYield,
  } = props;

  return (
    <Container>
      <ProductLabel>{productName}</ProductLabel>

      <SmallSetOfInfo>
        <SmallSetOfInfoLabel>SALDO ATUAL</SmallSetOfInfoLabel>
        <SmallSetOfInfoValue>
          R$
          {' '}
          {styleMoney(amount * averagePrice)}
        </SmallSetOfInfoValue>
      </SmallSetOfInfo>

      <MiddleContainer>
        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>QUANT.</SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>{amount}</SmallSetOfInfoValue>
        </SmallSetOfInfo>

        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>PREÇO MÉDIO</SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            R$
            {' '}
            {styleMoney(averagePrice)}
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>

        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>ÚLTIMA COTAÇÃO</SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            R$
            {' '}
            {styleMoney(lastQuotation)}
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>
      </MiddleContainer>

      <EndContainer>
        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>
            YIELD
            {' '}
            <span>(1M)</span>
          </SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            {currentMonthYield}
            %
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>

        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>
            YIELD
            {' '}
            <span>(12M)</span>
          </SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            {lastTwelveMonthYeld}
            %
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>

        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>% CARTEIRA</SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            {equity}
            %
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>
      </EndContainer>
    </Container>
  );
}

export default FundsProduct;
