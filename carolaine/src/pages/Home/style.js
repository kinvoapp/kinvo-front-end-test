import styled from "styled-components";

export const Main = styled.section`
  display: flex;
`;

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--cor-realce-um);
  margin: 10px 0 0 0;
  font-size: 20px;
`;

export const Indicativos = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
  margin: 24px 0 0 0;
`;

export const Indicativo = styled.div`
  background: var(--cor-fundo);
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 5%);
  padding: 14px;
  border-radius: 10px;

  span {
    display: block;
    text-transform: uppercase;
  }
`;

export const IndicativoTitulo = styled.span`
  font-size: 9px;
  margin: 0 0 3px 0;
  font-weight: 600;
`;
export const IndicativoValor = styled.span`
  font-size: 14px;
  color: var(--cor-realce-um);
  font-weight: 700;
`;
