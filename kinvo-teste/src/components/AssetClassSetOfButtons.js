import React, { Component } from "react";
import AssetClassButton from "./AssetClassButton";
import styled from "styled-components";

// styled-components code
const DIV = styled.div`
  display: inline-block;
`;

class AssetClassSetOfButtons extends Component {
  state = {};
  render() {
    return (
      <DIV>
        <AssetClassButton className="Ações" getState={true} />
        <AssetClassButton className="Nome da Classe" getState={false} />
        <AssetClassButton className="Nome da Classe" getState={false} />
        <AssetClassButton className="Nome da Classe" getState={false} />
      </DIV>
    );
  }
}

export default AssetClassSetOfButtons;
