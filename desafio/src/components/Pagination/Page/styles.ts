import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  & + div {
    margin-left: 10px;
  }
`;

export const PageButton = styled.button<ButtonProps>`
  width: 35px;
  height: 35px;
  border-radius: 4px;
  background-color: #fff;
  border: 1px solid #edeef0;
  color: #c2c5cc;
  font-size: 13px;
  font-weight: 400;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: #fff;
      background-color: #dce0e3;
      border: none;
    `}
`;
