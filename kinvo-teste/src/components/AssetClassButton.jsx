import React, { Component } from "react";
import styled from "styled-components";

// styled-components code
//background-color: ${props => (props.active ? "#F8FAFB" : "#EEF2F4")};
const DIV = styled.div`
  display: table-cell;
  background-color: #f8fafb;
  font-family: "helvetica-neue, arial";
  vertical-align: middle;
  h1 {
    font-size: 16px;
    text-align: left;
    margin-left: 10%;
  }
  color: #707b81;
  width: 265px;
  height: 65px;
  border-radius: 15px;
`;

class AssetClassButton extends Component {
  state = {
    className: "Nome da Classe",
    active: true
  };
  render() {
    return (
      <DIV>
        <h1>{this.state.className}</h1>
      </DIV>
    );
  }
}

export default AssetClassButton;
