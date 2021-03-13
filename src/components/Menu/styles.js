import styled, { css } from "styled-components";

export const Header = styled.header`
  grid-area: menu;

  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 5rem 3rem 2.6rem;
`;

export const Logo = styled.img``;

export const NavMenu = styled.nav`
  display: flex;
`;

export const ItemMenu = styled.div`
  display: flex;
  margin-left: 3rem;

  img {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
  }
`;

export const InfoMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleMenu = styled.span`
  text-transform: uppercase;
  font-size: 0.8rem;

  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray};
  `}
`;

export const ContentMenu = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    font-size: 1.6rem;
  `}
`;
