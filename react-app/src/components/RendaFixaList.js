import styled from "@emotion/styled";
import React from "react";
import RendaFixaListCard from "./RendaFixaListCard";

const RendaFixaList = () => {
  return (
    <Container>
      <H1>Minhas Rendas Fixas</H1>
      <RendaFixaListCard />
      <RendaFixaListCard />
      <RendaFixaListCard />
      <RendaFixaListCard />
      <RendaFixaListCard />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  background: #fff;
  margin-top: 20px;
  border-radius: 8px;
`;

const H1 = styled.div`
  font-size: 18px;
  color: #627179;
  padding: 14px;
`;

export default RendaFixaList;
