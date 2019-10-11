import React from 'react';

import { FundsNavTitle, FundsNav, FundsNavInput } from './styles';

function FundsNavBar(props) {
  const { handleSearchInput } = props;
  return (
    <FundsNav>
      <FundsNavTitle>Fundos</FundsNavTitle>
      <div>
        <form>
          <FundsNavInput
            type="text"
            onChange={handleSearchInput}
          />
        </form>
      </div>
    </FundsNav>
  );
}

export default FundsNavBar;
