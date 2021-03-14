import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 17rem;
  padding: 1.4rem 1.9rem;
  position: relative;
  flex: 1;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};

    &::before {
      content: "";
      width: 0.2rem;
      height: 3.6rem;
      background: ${theme.colors.grayMedium};
      position: absolute;
      left: 0.8rem;
    }
  `};

  @media screen and (max-width: 1130px) {
    min-width: 17rem;
    max-width: 100%;
  }
`;

export const Title = styled.span`
  font-size: 1rem;
  text-transform: uppercase;

  ${({ theme }) => css`
    color: ${theme.colors.grayDark};
    font-weight: ${theme.font.medium};
  `}
`;

export const Number = styled.span`
  font-size: 1.4rem;
  margin-top: 0.3rem;

  ${({ theme }) => css`
    color: ${theme.colors.purpleDark};
    font-weight: ${theme.font.bold};
  `}
`;
