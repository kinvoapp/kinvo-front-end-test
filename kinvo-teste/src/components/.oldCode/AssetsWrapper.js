import React, { Component } from 'react';
import styled from 'styled-components';
import StockClassSetOfButtons from './StockClassSetOfButtons';
import FundsNavBar from './FundsNavBar';

// styled-components code
const Article = styled.div`
  display: grid;
  background-color: #f8fafb;
  text-shadow: 10px;
  grid-template-rows: 100px 8fr;
`;

const DIV2 = styled.div`
  padding: 10px;
  box-shadow: 0 1px 2px;
  border-radius: 8px;
`;

//------------------------------------------

class AssetsWrapper extends Component {
  render() {
    return (
      <Article>
        <StockClassSetOfButtons />
        <DIV2>
          <FundsNavBar />
        </DIV2>
      </Article>
    );
  }
}

export default AssetsWrapper;
