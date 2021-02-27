import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 13px 16px 23px;
  text-decoration: none;
  height: 47px;

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
