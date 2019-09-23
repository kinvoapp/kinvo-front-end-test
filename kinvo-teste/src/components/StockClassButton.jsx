import React, { Component } from "react";
import styled from "styled-components";

// styled-components code
const H4 = styled.h4`
  font-size: 18px;
  background-color: transparent;
`;

const P = styled.p`
  font-size: 10px;
  background-color: transparent;
`;

const DIV = styled.div`
  font-family: "helvetica-neue, arial";
  color: #707b81;
  border-radius: 8px;
  height: 75px;
  width: 191px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
