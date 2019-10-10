import React from 'react';

import { Container } from './styles';
import FundsProduct from './components/FundsProduct';

function FundsSetOfProducts(props) {
  const { filteredProducts } = props;

  return (
    <Container>
      {filteredProducts
        .map((asset) => (
          <FundsProduct
            key={asset.productName}
            productName={asset.productName}
            equity={asset.equity}
            amount={asset.amount}
            averagePrice={asset.averagePrice}
            lastQuotation={asset.lastQuotation}
            currentMonthYield={asset.currentMonthYield}
            lastTwelveMonthYeld={asset.lastTwelveMonthsYeld}
          />
        ))}
    </Container>
  );
}

export default FundsSetOfProducts;
