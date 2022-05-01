import styled from "styled-components";
import search from "./assets/images/search.svg";

export const Container = styled.div`
  margin: 1rem 3rem;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: ligth;
  color: #627179;
`;

export const ContainerFilter = styled.div``;

export const Select = styled.select`
  padding: 3px 15px 3px 0;
  border: 1px solid #d6d9dd;
  border-radius: 6px;
  box-shadow: 0 0 0 0;
  outline: 0;
  margin-right: 15px;
  color: #707b81;
`;

export const Input = styled.input`
  height: 20px;
  background: url(${search}) 2px;
  background-repeat: no-repeat;
  border: 1px solid #d6d9dd;
  border-radius: 6px;
  padding-left: 20px;
  box-shadow: 0 0 0 0;
  outline: 0;
`;

export const Rendas = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const TitleDiv = styled.div`
  width: 50%;
  border: 1px solid #dae0e3;
  border-radius: 4px;
  margin-right: 10px;
  padding: 5px;
  &:first-child {
    width: 30%;
  }
  &:last-child {
    margin-right: 0;
    width: 20%;
  }
`;

export const TitleRendas = styled.h6`
  color: #4e5b61;
  margin: 0;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  height: 3rem;
`;

export const Titulo = styled.span`
  font-size: 13px;
  color: #4e5b61;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TituloClasse = styled.span`
  font-size: 13px;
  color: #8a51ba;
`;

export const TituloMinhaPosicao = styled.span`
  font-size: 13px;
  color: #38bfa0; //#008DCB;
`;

export const TituloVencimento = styled.span`
  font-size: 13px;
  color: #008dcb;
`;
