import styled from "styled-components";

export const Main = styled.section`
  display: flex;
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

export const PageTitle = styled.h1`
  color: var(--cor-realce-um);
  margin: 10px 0 0 0;
  font-size: 20px;
`;

export const Rentabilidade = styled.div`
  background: var(--cor-fundo);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 5%);
  padding: 14px;
  border-radius: 10px;
  margin-top: 22px;
  padding: 19px;
`;

export const Title = styled.h2`
  color: #627179;
  font-size: 18px;
  margin: 0 0 20px 0;
`;

export const Colunas = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
