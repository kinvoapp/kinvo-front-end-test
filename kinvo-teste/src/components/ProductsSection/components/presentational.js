import React from 'react';

import {
  Product,
  ProductLabel,
  Line,
  SmallSetOfInfo,
  SmallSetOfInfoValue,
  SmallSetOfInfoLabel,
  Container,
} from './styles';
import { styleMoney } from '~/components/FunctionsLibrary';

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
      <Product>
        <ProductLabel>{productName}</ProductLabel>

        <SmallSetOfInfo>
          <SmallSetOfInfoLabel>SALDO ATUAL</SmallSetOfInfoLabel>
          <SmallSetOfInfoValue>
            R$
            {' '}
            {styleMoney(amount * averagePrice)}
          </SmallSetOfInfoValue>
        </SmallSetOfInfo>

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
      </Product>
      <Line />
    </Container>
  );
}

export default FundsProduct;
