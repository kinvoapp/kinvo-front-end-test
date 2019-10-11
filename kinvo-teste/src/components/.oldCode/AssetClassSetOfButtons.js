import React, { Component } from "react";
import AssetClassButton from "./AssetClassButton";
import styled from "styled-components";

// styled-components code
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

class AssetClassSetOfButtons extends Component {
  state = {};
  render() {
    return (
      <Buttons>
        <AssetClassButton className="Ações" getState={true} />
        <AssetClassButton className="Nome da Classe" getState={false} />
        <AssetClassButton className="Nome da Classe" getState={false} />
        <AssetClassButton className="Nome da Classe" getState={false} />
      </Buttons>
    );
  }
}

export default AssetClassSetOfButtons;
