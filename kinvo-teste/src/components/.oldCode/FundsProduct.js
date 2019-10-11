import React, { Component } from 'react';
import styled from 'styled-components';
import { styleMoney } from '../FunctionsLibrary';

// styled-components code
const Product = styled.div`
  display: grid;
  font-family: "helvetica-neue, arial";
  grid-template-columns: repeat(8, 1fr);
  color: #4c309b;
  height: 40px;
`;

const ProductLabel = styled.div`
  font-size: 12px;
`;

const Line = styled.hr`
  color: rgba(0, 0, 0, 0.2);
`;

const SmallSetOfInfo = styled.div`
  align-items: center;
`;

const SmallSetOfInfoLabel = styled.div`
  font-size: 8px;
`;

const SmallSetOfInfoValue = styled.div`
  font-size: 14px;
  font-weight: bold;
`;


const DIV = styled.div`
  margin: 0 2%;
  border-left: 4px solid #4c309b;
  border-radius: 3px;
`;

//------------------------------------------------------------------------------------------

class FundsProduct extends Component {
  render() {
    return (
      <DIV>
        <Product>
          <P fontSize={12}>{this.props.productName}</P>

          <SmallSetOfInfo>
            <SmallSetOfInfoLabel fontSize={8}>SALDO ATUAL</SmallSetOfInfoLabel>
            <SmallSetOfInfoValue fontSize={14}>
              R$
              {' '}
              {styleMoney(this.props.amount * this.props.averagePrice)}
            </SmallSetOfInfoValue>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>QUANT.</P>
            <P fontSize={14}>{this.props.amount}</P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>PREÇO MÉDIO</P>
            <P fontSize={14}>
              R$
              {' '}
              {styleMoney(this.props.averagePrice)}
            </P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>ÚLTIMA COTAÇÃO</P>
            <P fontSize={14}>
              R$
              {' '}
              {styleMoney(this.props.lastQuotation)}
            </P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>
              YIELD
              {' '}
              <span>(1M)</span>
            </P>
            <P fontSize={14}>
              {this.props.currentMonthYield}
              %
                        </P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>
              YIELD
              {' '}
              <span>(12M)</span>
            </P>
            <P fontSize={14}>
              {this.props.lastTwelveMonthYeld}
              %
                        </P>
          </SmallSetOfInfo>

          <SmallSetOfInfo>
            <P fontSize={8}>% CARTEIRA</P>
            <P fontSize={14}>
              {this.props.equity}
              %
                        </P>
          </SmallSetOfInfo>
        </Product>
        <Line />
      </DIV>
    );
  }
}

export default FundsProduct;
