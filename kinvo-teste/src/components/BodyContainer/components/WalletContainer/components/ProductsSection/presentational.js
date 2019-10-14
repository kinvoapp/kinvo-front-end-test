import React from 'react';

import FundsNavBar from './components/FundsNavBar';
import FundsSetOfProducts from './components/FundsSetOfProducts';
import { Container } from './styles';

function ProductsSectionPresentational(props) {
  const { handleSearchInput, filteredProducts } = props;
  return (
    <Container>
      <FundsNavBar
        handleSearchInput={handleSearchInput}
      />

      <FundsSetOfProducts
        filteredProducts={filteredProducts}
      />
    </Container>
  );
}

export default ProductsSectionPresentational;
