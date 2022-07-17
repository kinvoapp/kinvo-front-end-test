import styled from "@emotion/styled";
import React from "react";
import RendaFixaCards from "./RendaFixaCards";

const RendaFixaCardsWrapper = () => {
  return (
    <Container>
      <H1>Renda Fixa</H1>
      <Wrapper>
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
        <RendaFixaCards title={"Saldo bruto"} subtitle={"R$ 47.654,46"} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 22px;
`;

const H1 = styled.div`
  font-size: 24px;
  color: #4C309B;
  font-weight: bold;
`;

export default RendaFixaCardsWrapper;
