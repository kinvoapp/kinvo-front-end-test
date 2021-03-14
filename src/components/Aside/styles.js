import styled, { css } from "styled-components";

import ArrowRight from "../../assets/arrow-right.svg";

export const Container = styled.aside`
  grid-area: aside;
  height: 100%;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const ListAside = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItemAsideContainer = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ListItemAside = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  border-bottom: 1px solid #cccfd1;
  padding-bottom: 1.7rem;
  padding-top: 1.8rem;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    background: url(${ArrowRight});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    right: 1.5rem;
  }
`;

export const IconAside = styled.img`
  width: 3.4rem;
  height: 3.4rem;
`;

export const TitleAside = styled.span`
  font-size: 1.3rem;
  margin-left: 1.3rem;
  padding-right: 85px;
  display: inline-block;

  ${({ theme }) => css`
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray};
  `}
`;

export const DropMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const DropMenuItem = styled.li`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #cccfd1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  position: relative;
  cursor: pointer;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: ${theme.font.medium};

    &::before {
      content: "•";
      color: ${theme.colors.purpleDark};
      font-size: 3rem;
      display: inline-block;
      padding-left: 1.5rem;
      padding-right: 1rem;
    }
  `}

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    background: url(${ArrowRight});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    position: absolute;
    right: 1.5rem;
  }
`;
