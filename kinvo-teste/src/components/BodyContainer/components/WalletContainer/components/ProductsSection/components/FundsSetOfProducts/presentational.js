import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import { Container } from './styles';
import FundsProduct from './components/FundsProduct';

function FundsSetOfProductsPresentational(props) {
  const { filteredProducts } = props;

  return (
    <Scrollbars autoHide style={{ height: 600 }}>
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
    </Scrollbars>
  );
}

export default FundsSetOfProductsPresentational;
