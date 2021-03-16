import styled, { css } from "styled-components";

export const Container = styled.div`
  padding: 1.6rem 1.9rem;

  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
  `}

  .paginationButtons {
    display: flex;
    justify-content: space-between;
    width: 150px;
    gap: 0.5rem;
    margin: 0 auto;

    li {
      color: #c2c5cc;
      border: 2px solid #edeef0;
      padding: 1rem 1.4rem;
      list-style: none;
      font-weight: bold;
      font-size: 1.5rem;

      a {
        outline: none;
        cursor: pointer;
      }
    }

    .paginationActive {
      color: #fff;
      background: #dce0e3;
      border-color: #dce0e3;
    }
  }
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
