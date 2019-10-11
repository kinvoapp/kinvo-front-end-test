import React from 'react';

import FundsNavBar from './components/FundsNavBar';
import FundsSetOfProducts from './components/FundsSetOfProducts';

function ProductsSectionPresentational(props) {
  const { handleSearchInput, filteredProducts } = props;
  return (
    <section>
      <FundsNavBar
        handleSearchInput={handleSearchInput}
      />

      <div>
        <FundsSetOfProducts
          filteredProducts={filteredProducts}
        />
      </div>
    </section>
  );
}

export default ProductsSectionPresentational;
