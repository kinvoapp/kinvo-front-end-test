import React from 'react';
import './styles.css';
import {
  Container, ProductsList, LeftPurpleSymbol,
  ProductName, ProductInfo,
} from './styles';

function Presentational(props) {
  const { filteredProducts } = props;

  return (
    <Container>

      {filteredProducts.map((products) => (

        <ProductsList>

          <LeftPurpleSymbol />

          <ProductName>
            <p>
              {products.productName}
            </p>
          </ProductName>

          <ProductInfo>
            <p>SALDO ATUAL</p>
            <h3>
              R$
              {' '}
              {products.equity}
            </h3>
          </ProductInfo>

          <ProductInfo>
            <p>QUANT.</p>
            <h3>{products.amount}</h3>
          </ProductInfo>

          <ProductInfo>
            <p>PREÇO MÉDIO</p>
            <h3>
              R$
              {' '}
              {products.averagePrice}
            </h3>
          </ProductInfo>

          <ProductInfo>
            <p>ÚLTIMA COTAÇÃO</p>
            <h3>
              R$
              {' '}
              {products.lastQuotation}
            </h3>
          </ProductInfo>

          <ProductInfo>
            <p>YIELD (1M)</p>
            <h3>
              {products.currentMonthYield}
              %
            </h3>
          </ProductInfo>

          <ProductInfo>
            <p>YIELD (12M)</p>
            <h3>
              {products.lastTwelveMonthsYeld}
              %
            </h3>
          </ProductInfo>

          <ProductInfo>
            <p>% CARTEIRA</p>
            <h3>12,31%</h3>
          </ProductInfo>

        </ProductsList>

      ))}

    </Container>

  );
}

export default Presentational;
