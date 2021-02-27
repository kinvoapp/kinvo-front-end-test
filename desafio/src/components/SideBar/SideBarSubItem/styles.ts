import { Link } from 'react-router-dom';

import styled, { css } from 'styled-components';

interface ContainerProps {
  active: boolean;
}

export const Container = styled(Link)<ContainerProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 13px 16px 23px;
  text-decoration: none;
  height: 47px;
  border-bottom: 0.5px solid rgba(204, 207, 209, 0.4);
  background-color: #fff;

  ${props =>
    props.active &&
    css`
      background-color: #f8fafb;
    `}

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1;
  }

  h1 {
    font-size: 13px;
    font-weight: 500;
    margin-left: 10px;
    color: #707b81;
  }
`;
