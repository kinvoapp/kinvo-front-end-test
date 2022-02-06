import styled from "styled-components";

export const HeaderContainer = styled.header`
  color: var(--cor-texto);
  background: var(--cor-fundo);
  box-shadow: 0 3px 20px 0 rgba(112, 123, 129, 0.1);
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9;
`;

export const Navigation = styled.div`
  display: flex;
`;

export const NavigationItem = styled.div`
  display: flex;
  margin-left: 40px;

  img {
    margin-right: 10px;
  }
`;

export const Text = styled.div``;

export const Title = styled.div`
  text-transform: uppercase;
  font-size: 8px;
  font-weight: 500;
`;

export const Value = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
