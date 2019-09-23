import React, { Component } from "react";
import logo from "./images/button-4-1.png";
import styled from "styled-components";
import { CaretRight } from "styled-icons/boxicons-regular/CaretRight";

// styled-components code
const RedCaret = styled(CaretRight)`
  color: red;
`;

const App = () => <RedCaret />;
const DIV = styled.div`
  font-family: "helvetica-neue, arial";
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    padding: 0 10px;
  }
  width: 225px;
  height: 70px;
  background-color: #eef2f4;
`;

//--------------------

class SidebarButton extends Component {
  state = { imgSrc: "./images/button-4-1.png", name: "Sem Nome", active: true };
  render() {
    return (
      <DIV>
        <img src={logo} width={40} height={40} />
        <p>
          {this.state.name}
          {App()}
        </p>
      </DIV>
    );
  }
}

export default SidebarButton;
