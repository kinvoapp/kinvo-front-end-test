import styled, { css } from "styled-components";

export const Container = styled.section``;

export const Title = styled.h1`
  font-size: 2rem;
  padding-top: 2.7rem;
  padding-bottom: 2.3rem;

  ${({ theme }) => css`
    color: ${theme.colors.purpleDark};
    font-weight: ${theme.font.bold};
  `}
`;

export const ContainerBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 1250px) {
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
