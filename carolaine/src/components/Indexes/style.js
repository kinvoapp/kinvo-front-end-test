import styled from "styled-components";

export const IndexesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin: 24px 0 0 0;
`;

export const Index = styled.div`
  background: var(--cor-fundo);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 5%);
  padding: 14px;
  border-radius: 10px;

  span {
    display: block;
    text-transform: uppercase;
  }
`;

export const IndexTitle = styled.span`
  font-size: 9px;
  margin: 0 0 3px 0;
  font-weight: 600;
`;
export const IndexValue = styled.span`
  font-size: 14px;
  color: var(--cor-realce-um);
  font-weight: 700;
`;
