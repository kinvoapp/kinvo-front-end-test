import React, { Component } from "react";
import styled from "styled-components";
import botaoAcoes from "./botaoAcoes";
import { getDataFromUrl } from "./functionsLibrary";

const data = JSON.parse(getDataFromUrl(externUrl));
console.log(data.data.summary);

class BotaoAcoes extends Component {
  state = { dados: JSON.parse(getDataFromUrl(externUrl)) };
  render() {
    return <h1>hello world</h1>;
  }
}

export default BotaoAcoes;
