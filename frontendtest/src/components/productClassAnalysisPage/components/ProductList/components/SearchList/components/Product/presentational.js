import React, { Component } from 'react';
import {
  Container, LeftPurpleSymbol, ProductInfo, ProductName,
} from './styles';

function Product(props) {
  const {
    productName, equity, amount,
    averagePrice, lastQuotation,
    currentMonthYield, lastTwelveMonthsYeld,
  } = props;

  return (
    <Container>
      <LeftPurpleSymbol />

      <ProductName>
        <p>
          {productName}
        </p>
      </ProductName>

      <ProductInfo>
        <p>SALDO ATUAL</p>
        <h3>
          R$
          {' '}
          {equity}
        </h3>
      </ProductInfo>

      <ProductInfo>
        <p>QUANT.</p>
        <h3>{amount}</h3>
      </ProductInfo>

      <ProductInfo>
        <p>PREÇO MÉDIO</p>
        <h3>
          R$
          {' '}
          {averagePrice}
        </h3>
      </ProductInfo>

      <ProductInfo>
        <p>ÚLTIMA COTAÇÃO</p>
        <h3>
          R$
          {' '}
          {lastQuotation}
        </h3>
      </ProductInfo>

      <ProductInfo>
        <p>YIELD (1M)</p>
        <h3>
          {currentMonthYield}
          %
        </h3>
      </ProductInfo>

      <ProductInfo>
        <p>YIELD (12M)</p>
        <h3>
          {lastTwelveMonthsYeld}
          %
        </h3>
      </ProductInfo>

      <ProductInfo>
        <p>% CARTEIRA</p>
        <h3>12,31%</h3>
      </ProductInfo>

    </Container>
  );
}

export default Product;
