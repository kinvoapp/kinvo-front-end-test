import styled from "@emotion/styled";
import React from "react";

const RendaFixaPosicaoCard = () => {
  return (
    <Container>
      <Title>MINHA POSIÇÃO</Title>
      <Wrapper>
        <div>
          <Subtitle>VALOR INVES.</Subtitle>
          <P>1.003,00</P>
        </div>
        <div>
          <Subtitle>SALDO BRUTO</Subtitle>
          <P>1.124,00</P>
        </div>
        <div>
          <Subtitle>RENT.</Subtitle>
          <P>48,55%</P>
        </div>
        <div>
          <Subtitle>% DA CART</Subtitle>
          <P>5,33%</P>
        </div>
        <div>
          <Subtitle>CDI</Subtitle>
          <P>1,24</P>
        </div>
        <div>
          <Subtitle>SOBRE CDI</Subtitle>
          <P>118</P>
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

export default RendaFixaPosicaoCard;
