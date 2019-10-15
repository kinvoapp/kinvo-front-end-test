import React from 'react';

import { Scrollbars } from 'react-custom-scrollbars';
import {
  Container,
} from './styles';
import Product from './components/Product';

function Presentational(props) {
  const { filteredProducts } = props;

  return (
    <Scrollbars autoHide style={{ height: 400 }}>
      <Container>
        {filteredProducts.map((product) => (
          <Product
            {...product}
          />
        ))}
      </Container>
    </Scrollbars>
  );
}

export default Presentational;
