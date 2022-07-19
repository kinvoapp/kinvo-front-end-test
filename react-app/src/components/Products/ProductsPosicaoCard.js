import styled from "@emotion/styled";
import React from "react";

const ProductsPosicaoCard = ({ data }) => {
  return (
    <Container>
      <Title>MINHA POSIÇÃO</Title>
      <Wrapper>
        <div>
          <Subtitle>VALOR INVES.</Subtitle>
          <P>{data.valueApplied}</P>
        </div>
        <div>
          <Subtitle>SALDO BRUTO</Subtitle>
          <P>{data.equity}</P>
        </div>
        <div>
          <Subtitle>RENT.</Subtitle>
          <P>{data.profitability + "%"}</P>
        </div>
        <div>
          <Subtitle>% DA CART</Subtitle>
          <P>{data.portfolioPercentage + "%"}</P>
        </div>
        <div>
          <Subtitle>CDI</Subtitle>
          <P>{data.indexerValue}</P>
        </div>
        <div>
          <Subtitle>SOBRE CDI</Subtitle>
          <P>{data.percentageOverIndexer}</P>
        </div>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 8px;
  width: 459px;
  height: 77px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 9px;
  color: #9b9b9b;
`;

const Subtitle = styled.div`
  font-size: 9px;
  color: #9b9b9b;
`;
const P = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #38bfa0;
  margin-bottom: 4px;
`;

export default ProductsPosicaoCard;
