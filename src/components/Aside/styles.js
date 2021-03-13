import styled, { css } from "styled-components";

export const Container = styled.aside`
  grid-area: aside;
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;
