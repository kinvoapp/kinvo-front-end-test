import styled from "@emotion/styled";
import React from "react";

const RendaFixaVencimentoCard = () => {
  return (
    <Container>
      <Title>VENCIMENTO</Title>
      <Wrapper>
        <div>
          <Subtitle>DATA VENC.</Subtitle>
          <P>15.05.2024</P>
        </div>
        <div>
          <Subtitle>DIAS ATÉ VENC.</Subtitle>
          <P>5762</P>
        </div>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 8px;
  width: 194px;
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
  color: #279ed3;
  margin-bottom: 4px;
`;

export default RendaFixaVencimentoCard;
