import React, { Component } from "react";
import styled from "styled-components";
import BotaoAcoes from "./botaoAcoes";
import { getDataFromUrl } from "./functionsLibrary";
import { styleMoney } from "./functionsLibrary.jsx";

// styled-components code
const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

function getButtonData() {
  const data = JSON.parse(getDataFromUrl()).data.summary;
  let dictfinal = [];

  for (let d in data) {
    let info = {};
    switch (d) {
      case "grossBalance":
        info.nome = "SALDO BRUTO";
        info.valor = "R$ " + styleMoney(data[d]);
        dictfinal.push(info);
        break;
      case "appliedValue":
        info.nome = "VALOR APLICADO";
        info.valor = "R$ " + styleMoney(data[d]);
        dictfinal.push(info);
        break;
      case "capitalGains":
        info.nome = "GANHO DE CAPITAL";
        info.valor = "R$ " + styleMoney(data[d]);
        dictfinal.push(info);
        break;
      case "earnings":
        info.nome = "TOTAL DISTRIBUÍDOS";
        info.valor = "R$ " + styleMoney(data[d]);
        dictfinal.push(info);
        break;
      case "yield":
        info.nome = "YIELD";
        info.valor = data[d] + "%";
        dictfinal.push(info);
        break;
    }
  }
  return dictfinal;
}

class BotoesAcoes extends Component {
  state = { dados: getButtonData() };

  render() {
    return (
      <DIV>
        {this.state.dados.map(dado => (
          <BotaoAcoes
            key={dado.nome}
            nomeButton={dado.nome}
            valor={dado.valor}
          />
        ))}
      </DIV>
    );
  }
}

export default BotoesAcoes;
