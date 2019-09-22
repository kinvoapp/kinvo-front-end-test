import React, { Component } from "react";
import styled from "styled-components";

// styled-components code
const H4 = styled.h4`
  font-size: 18px;
`;

const P = styled.p`
  font-size: 10px;
`;

const DIV = styled.div`
  font-family: "helvetica-neue, arial";
  color: #707b81;
  border-radius: 3px;
  border: 2px solid palevioletred;
  margin: 0 1em;
  height: 75px;
  width: 191px;
  text-align: center;
`;

// -------------------------------------------------------

class StockClassButton extends Component {
  render() {
    return (
      <DIV>
        <P>{this.props.buttonName}</P>
        <H4>{this.props.value}</H4>
      </DIV>
    );
  }
}

export default StockClassButton;
