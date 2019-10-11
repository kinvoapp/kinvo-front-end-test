import React from 'react';

import { Container } from './styles';
import FundsProduct from './components/FundsProduct';

function FundsSetOfProductsPresentational(props) {
  const { filteredProducts } = props;

  return (
    <Container>
      {filteredProducts
        .map((asset) => (
          <FundsProduct
            key={Math.random()}
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

export default FundsSetOfProductsPresentational;
