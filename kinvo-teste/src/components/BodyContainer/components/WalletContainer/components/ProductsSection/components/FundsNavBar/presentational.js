import React from 'react';

import {
  FundsNavTitle,
  FundsNav,
  FundsNavInput,
  FundsNavInputContainer,
} from './styles';

function FundsNavBar(props) {
  const { handleSearchInput } = props;
  return (
    <FundsNav>
      <FundsNavTitle>Fundos</FundsNavTitle>
      <form>
        <FundsNavInputContainer>
          <FundsNavInput
            type="text"
            onChange={handleSearchInput}
          />
        </FundsNavInputContainer>
      </form>
    </FundsNav>
  );
}

export default FundsNavBar;
