import styled, { CSSProperties } from "styled-components";

type ContainerProps = {
  hasIcon?: any;
};

export const Container = styled.div<ContainerProps>`
  position: relative;

  ${(p) =>
    p.hasIcon &&
    `
  input {
    padding-left: 32px
  }`};
`;

type StyledInputProps = {
  minWidth?: CSSProperties["minWidth"];
};

export const StyledInput = styled.input<StyledInputProps>`
  background-color: #fff;
  height: 32px;
  border-radius: 10px;
  display: flex;
  border: 1px solid #d6d9dd;
  padding: 0 10px;
  min-width: ${(p) => p.minWidth ?? "none"};
`;

export const InputIconContainer = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
`;
