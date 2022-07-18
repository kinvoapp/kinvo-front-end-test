import styled from "@emotion/styled";
import React from "react";
import RendaFixaPosicaoCard from "./ProductsPosicaoCard";
import RendaFixaTituloCard from "./ProductsTituloCard";
import RendaFixaVencimentoCard from "./ProductsVencimentoCard";

const ProductsListCards = ({ data }) => {
  console.log("a data em Lists é: ", data);
  if (data.fixedIncome && data.due && data.position) {
    return (
      <Container>
        <RendaFixaTituloCard data={data.fixedIncome} />
        <RendaFixaPosicaoCard data={data.position} />
        <RendaFixaVencimentoCard data={data.due}/>
      </Container>
    );
  }
};

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 10px;
  justify-content: space-between;
`;

export default ProductsListCards;
