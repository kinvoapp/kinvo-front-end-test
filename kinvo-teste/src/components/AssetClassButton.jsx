import React, { Component } from "react";
import styled from "styled-components";
//
// styled-components code
const DIV = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: table-cell;
  background-color: ${props => (props.active ? "#F8FAFB" : "#EEF2F4")};
  font-family: "helvetica-neue, arial";
  vertical-align: middle;
  h1 {
    font-size: 16px;
    text-align: left;
    margin-left: 10%;
    background-color: transparent;
  }
  color: #707b81;
  width: 265px;
  height: 65px;
  border-radius: 10px;
`;

class AssetClassButton extends Component {
  render() {
    return (
      <DIV active={this.props.getState}>
        <h1>{this.props.className}</h1>
      </DIV>
    );
  }
}

export default AssetClassButton;
