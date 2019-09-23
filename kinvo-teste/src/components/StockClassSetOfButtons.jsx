import React, { Component } from "react";
import styled from "styled-components";
import StockClassButton from "./StockClassButton";
import { getDataFromUrl } from "./FunctionsLibrary";
import { styleMoney } from "./FunctionsLibrary.jsx";

// styled-components code
const DIV = styled.div`
  display: inline-flex;
  padding: 1.5%;
`;

function getButtonData() {
  const data = JSON.parse(getDataFromUrl()).data.summary;
  let dictFinal = [];

  for (let d in data) {
    let info = {};
    switch (d) {
      case "grossBalance":
        info.name = "SALDO BRUTO";
        info.value = "R$ " + styleMoney(data[d]);
        dictFinal.push(info);
        break;
      case "appliedValue":
        info.name = "VALOR APLICADO";
        info.value = "R$ " + styleMoney(data[d]);
        dictFinal.push(info);
        break;
      case "capitalGains":
        info.name = "GANHO DE CAPITAL";
        info.value = "R$ " + styleMoney(data[d]);
        dictFinal.push(info);
        break;
      case "earnings":
        info.name = "TOTAL DISTRIBUÍDOS";
        info.value = "R$ " + styleMoney(data[d]);
        dictFinal.push(info);
        break;
      case "yield":
        info.name = "YIELD";
        info.value = data[d] + "%";
        dictFinal.push(info);
        break;
    }
  }
  return dictFinal;
}

class StockClassSetOfButtons extends Component {
  state = { data: getButtonData() };

  render() {
    return (
      <DIV>
        {this.state.data.map(data => (
          <StockClassButton
            key={data.name}
            buttonName={data.name}
            value={data.value}
          />
        ))}
      </DIV>
    );
  }
}

export default StockClassSetOfButtons;
