import React, { Component } from "react";
import styled from "styled-components";
import AssetsWrapper from "./AssetsWrapper";

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
  text-align: center;
  background-color: #b1bbc1;
  div {
    margin: 0 0.5%;
  }
`;

class AssetsWrapperSuper extends Component {
  state = {};
  render() {
    return (
      <DIV>
        <P>Análise por Classe de Ativos</P>
        <div>
          <AssetsWrapper />
        </div>
      </DIV>
    );
  }
}

export default AssetsWrapperSuper;
