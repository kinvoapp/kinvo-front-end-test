import styled from "styled-components";

export const RendaContainer = styled.div`
  display: flex;
  padding: 20px;
  border-bottom: 1px solid #eef2f4;

  &:nth-of-type(odd) {
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
        return `0 0 calc(32% - 20px)`;

      case "position":
        return `1 0 calc(48% - 20px)`;

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
  justify-content: ${(props) => {
    switch (props.$mode) {
      case "two-columns":
        return `space-between`;

      case "six-columns":
        return `flex-start`;
    }
  }};

  div {
    flex: ${(props) => {
      switch (props.$mode) {
        case "two-columns":
          return `0 0 calc(50% - 5px)`;

        case "six-columns":
          return `0 0 calc(100% / 6)`;
      }
    }};
  }

  div:nth-of-type(1) {
    flex: ${(props) => (props.altMode ? "0 0 30%" : null)};
  }

  h3 {
    flex: ${(props) => (props.altMode ? "0 0 70%" : null)};
  }
`;

export const Texto = styled.h3`
  font-size: 12px;
  font-weight: 600;
  margin: 0 10px 0 0;
`;

export const ClassLabel = styled.div`
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const Class = styled.div`
  font-weight: 700;
  font-size: 14px;
  width: 98%;
  word-break: break-word;
  color: ${(props) => {
    switch (props.$mode) {
      case "title":
        return `var(--cor-realce-quatro)`;

      case "position":
        return `var(--cor-realce-seis)`;

      case "due":
        return `var(--cor-realce-cinco)`;
    }
  }};
`;
