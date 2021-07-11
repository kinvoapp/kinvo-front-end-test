import styled, { CSSProperties } from "styled-components";

export type ContainerProps = {
  margin?: CSSProperties["margin"];
  padding?: CSSProperties["padding"];
};

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  height: 32px;
  border-radius: 10px;
  display: flex;
  border: 1px solid #d6d9dd;
  padding: ${(p) => p.padding ?? "0 10px"};
  margin: ${(p) => p.margin ?? "0"};
`;

export const StyledSelect = styled.select`
  width: 100%;
  background: transparent;
  border: none;
`;

export const StyledOption = styled.option``;
