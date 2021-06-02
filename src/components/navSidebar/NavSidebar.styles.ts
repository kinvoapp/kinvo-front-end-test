import styled, { css } from 'styled-components';
import { createEmptyArray } from '@utils/createEmptyArray';
import { device } from '@styles/tools/breakpoints.styles';

export const NAV_SIDEBAR_WIDTH = 64;

const NAV_LINK_HEIGHT = 64;
const NAV_LINK_MOBILE_HEIGHT = 55;

export const Container = styled.aside`
  /* margin-top: 90px; */

  min-height: 100%;
  width: 225px;
  background: ${props => props.theme.colors.white};
`;

export const Nav = styled.nav`
  a {
    text-decoration: none;
  }
`;

export const Content = styled.div`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.grey400};
  width: 225px;
  height: 68px;
  padding: 18px 14px;
  display: flex;
  align-items: center;
  transition: filter 0.15s ease-in-out;

  p {
    margin-bottom: 0;
    margin-left: 16px;
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 500;
    width: 100%;
    color: ${props => props.theme.colors.grey700};
  }

  &:hover {
    cursor: pointer;
    filter: brightness(0.95);
  }
`;

export const IconBackground = styled.div`
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  ${props =>
    props.isActive &&
    css`
      background: ${props.theme.colors.purple700};
    `}
  background: ${props => props.theme.colors.grey400};
`;
