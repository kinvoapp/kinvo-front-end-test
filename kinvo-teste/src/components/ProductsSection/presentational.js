import React from 'react';

import FundsNavBar from './components/FundsNavBar';
import FundsSetOfProducts from './components/FundsSetOfProducts';

function ProductsSectionPresentational(props) {
  const { handleSearchInput, products, searchTerm } = props;
  return (
    <section>
      <FundsNavBar
        handleSearchInput={handleSearchInput}
      />

      <div>
        <FundsSetOfProducts
          products={products}
          searchFilter={searchTerm}
        />
      </div>
    </section>
  );
}

export default ProductsSectionPresentational;
