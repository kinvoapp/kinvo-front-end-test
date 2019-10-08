import React, { Component } from 'react';
import styled from 'styled-components';
import StockClassSetOfButtons from './StockClassSetOfButtons';
import FundsNavBar from './FundsNavBar';

// styled-components code
const Article = styled.div`
  display: grid;
  background-color: #f8fafb;
  text-shadow: 10px;
  grid-template-rows: 1fr 8fr;
`;

const DIV2 = styled.div`
  margin: 0 2%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 8px;
`;

//------------------------------------------

class AssetsWrapper extends Component {
  state = {};
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
