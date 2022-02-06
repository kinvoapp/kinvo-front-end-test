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

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
