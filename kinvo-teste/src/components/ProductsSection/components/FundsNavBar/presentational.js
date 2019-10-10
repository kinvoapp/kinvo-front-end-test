import React from 'react';

import FundsSetOfProducts from '../FundsSetOfProducts';

import { FundsNavTitle, FundsNav, FundsNavInput } from './styles';

function FundsNavBar(props) {
  const { searchHandler, searchTerm, products } = props;
  return (
    <section>
      <FundsNav>
        <FundsNavTitle>Fundos</FundsNavTitle>
        <div>
          <form>
            <FundsNavInput
              type="text"
              onChange={searchHandler}
              value={searchTerm}
            />
          </form>
        </div>
      </FundsNav>

      <div>
        <FundsSetOfProducts
          product={products}
          searchFilter={searchTerm}
        />
      </div>
    </section>
  );
}

export default FundsNavBar;
