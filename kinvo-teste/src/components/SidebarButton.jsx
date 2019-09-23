import React, { Component } from "react";
import logo from "./images/button-4-1.png";
import styled from "styled-components";

// styled-components code

const DIV = styled.div`
  font-family: "helvetica-neue, arial";
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  p {
    padding: 0 10px;
  }
  width: 200px;
  height: 70px;
  background-color: ${props => (props.getState ? "#eef2f4" : "#ffffff")};
  border: 1px solid #eef2f4;
`;

//--------------------

class SidebarButton extends Component {
  render() {
    return (
      <DIV getState={this.props.active}>
        <img src={this.props.imgSrc} width={40} height={40} />
        <p>{this.props.name}</p>
      </DIV>
    );
  }
}

export default SidebarButton;
