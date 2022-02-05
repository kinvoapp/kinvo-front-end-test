import styled from "styled-components";

export const RendaContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eef2f4;

  &:nth-of-type(even) {
    background: #f8fafb;
  }
`;

export const Item = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 10px;
  padding: 10px;
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

export const Columns = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Texto = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  flex: 1 0 75%;
`;

export const ClassLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Class = styled.div`
  font-weight: 700;
  font-size: 14px;
  color: var(--cor-realce-quatro);
`;
