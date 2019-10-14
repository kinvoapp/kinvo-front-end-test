import React from 'react';
import {
  Container,
} from './styles';
import Product from './components/Product';

function Presentational(props) {
  const { filteredProducts } = props;

  return (

    <Container>
      {filteredProducts.map((product) => (
        <Product
          {...product}
        />
      ))}
    </Container>

  );
}

export default Presentational;
