import React, { Component } from "react";
import { Produto, P, PequenaInfo, Line } from "./styles";

class Asset extends Component {
  render() {
    return (
      <React.Fragment>
        <Produto>
          <P fontSize={12}>{this.props.productName}</P>

          <PequenaInfo>
            <P fontSize={8}>SALDO ATUAL</P>
            <P fontSize={14}>
              R$ {this.props.amount * this.props.averagePrice}
            </P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>QUANT.</P>
            <P fontSize={14}>{this.props.amount}</P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>PREÇO MÉDIO</P>
            <P fontSize={14}>R$ {this.props.averagePrice}</P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>ÚLTIMA COTAÇÃO</P>
            <P fontSize={14}>R$ {this.props.lastQuotation}</P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>
              YIELD <span>(1M)</span>
            </P>
            <P fontSize={14}>{this.props.currentMonthYield}%</P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>
              YIELD <span>(12M)</span>
            </P>
            <P fontSize={14}>{this.props.lastTwelveMonthYeld}%</P>
          </PequenaInfo>

          <PequenaInfo>
            <P fontSize={8}>% CARTEIRA</P>
            <P fontSize={14}>{this.props.equity}%</P>
          </PequenaInfo>
        </Produto>
        <Line />
      </React.Fragment>
    );
  }
}

export default Asset;
