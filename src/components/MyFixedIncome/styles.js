import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1.6rem 1.9rem;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}
`;

export const MyFixedIncomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;

  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.medium};
  `}
`;
