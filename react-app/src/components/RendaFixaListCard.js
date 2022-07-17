import styled from "@emotion/styled";
import React from "react";
import RendaFixaPosicaoCard from "./RendaFixaPosicaoCard";
import RendaFixaTituloCard from "./RendaFixaTituloCard";
import RendaFixaVencimentoCard from "./RendaFixaVencimentoCard";

const RendaFixaListCard = () => {
  return (
    <Container>
      <RendaFixaTituloCard />
      <RendaFixaPosicaoCard />
      <RendaFixaVencimentoCard />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  justify-content: space-between;
`;

const CardVencimento = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 8px;
  width: 194px;
  height: 77px;
  padding: 5px;
`;

export default RendaFixaListCard;
