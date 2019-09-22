import React, { Component } from "react";
import styled from "styled-components";

// styled-components code
const P = styled.p`
  font-size: ${props => `${props.fontSize}px`};
  font-weight: ${props => (props.fontSize === 14 ? 900 : 0)};
`;

const Product = styled.div`
  display: grid;
  font-family: "helvetica-neue, arial";
  height: 45px;
  grid-template-columns: repeat(8, 1fr);
  color: #4c309b;
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.2);
  margin-left: -100px;
`;

const SmallSetOfInfo = styled.div``;

//------------------------------------------------------------------------------------------

class FundsProduct extends Component {
  render() {
    return (
      <React.Fragment>
        <Product>
          <P fontSize={12}>{this.props.productName}</P>

          <SmallSetOfInfo>
            <P fontSize={8}>SALDO ATUAL</P>
            <P fontSize={14}>
              R$ {this.props.amount * this.props.averagePrice}
            </P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>QUANT.</P>
            <P fontSize={14}>{this.props.amount}</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>PREÇO MÉDIO</P>
            <P fontSize={14}>R$ {this.props.averagePrice}</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>ÚLTIMA COTAÇÃO</P>
            <P fontSize={14}>R$ {this.props.lastQuotation}</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>
              YIELD <span>(1M)</span>
            </P>
            <P fontSize={14}>{this.props.currentMonthYield}%</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>
              YIELD <span>(12M)</span>
            </P>
            <P fontSize={14}>{this.props.lastTwelveMonthYeld}%</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>% CARTEIRA</P>
            <P fontSize={14}>{this.props.equity}%</P>
          </SmallSetOfInfo>
        </Product>
        <Line />
      </React.Fragment>
    );
  }
}

export default FundsProduct;
