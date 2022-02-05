import styled from "styled-components";

export const RendaContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eef2f4;
`;

export const Item = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 10px;
  padding: 8px;
  flex: ${(props) => {
    switch (props.$mode) {
      case "title":
        return `0 0 calc(35% - 20px)`;

      case "position":
        return `1 0 calc(45% - 20px)`;

      case "due":
        return `0 0 20%`;
    }
  }};
  margin-right: ${(props) => {
    switch (props.$mode) {
      case "title":
        return `10px`;

      case "position":
        return `10px`;
    }
  }};
`;

export const Title = styled.div`
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 18px;

  svg {
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const Texto = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const Classe = styled.div``;

export const Columns = styled.div``;
