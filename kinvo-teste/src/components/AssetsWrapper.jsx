import React, { Component } from "react";
import styled from "styled-components";
import AssetClassSetOfButtons from "./AssetClassSetOfButtons";
import StockClassSetOfButtons from "./StockClassSetOfButtons";
import FundsNavBar from "./FundsNavBar";

// styled-components code
const P = styled.p`
  font-family: "helvetica-neue, arial";
  font-size: 20px;
  color: #707b81;
  font-weight: 300;
  text-align: left;
  margin: 10px 40px;
`;

const DIV = styled.div`
  background-color: #f8fafb;
  text-shadow: 10px;
`;

const DIV2 = styled.div`
  margin: 0 2%;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

//------------------------------------------

class AssetsWrapper extends Component {
  state = {};
  render() {
    return (
      <DIV>
        <AssetClassSetOfButtons />
        <StockClassSetOfButtons />
        <DIV2>
          <FundsNavBar />
        </DIV2>
      </DIV>
    );
  }
}

export default AssetsWrapper;
