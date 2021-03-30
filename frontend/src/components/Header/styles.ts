import styled from 'styled-components';

import arrowIcon from '../../assets/icons/arrow-select-icon.svg';
import navIcon from '../../assets/icons/nav-icon.svg';

export const HeaderBar = styled.header`
  width: 100%;
  background-color: white;
  min-height: 90px;
  box-shadow: 0px 3px 20px rgba(112, 123, 129, 0.1);
  padding: 0 50px 0 28px;
  display: flex;
  align-items: center;
  z-index: 1;
  h2 {
    font-size: 8px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: #707b81;
  }
  p {
    font-weight: 700;
    color: #707b81;
    margin-top: 1px;
  }
  .rightHeaderItems {
    margin-left: auto;
    display: flex;
  }
`;

export const HeaderStatus = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const WalletSelect = styled.div`
  display: flex;
  align-items: center;
  margin-left: 59px;
  flex: 1;
  .selectWallet {
    min-width: 30px;
    height: 30px;
    background: #5d41ac url(${arrowIcon}) center no-repeat;
    border-radius: 50%;
    margin-right: 10px;
  }
  h2 {
    font-weight: bold;
  }
`;

export const NavItem = styled.div`
  width: 30px;
  height: 30px;
  background: #5d41ac url(${navIcon}) center no-repeat;
  border-radius: 50%;
  margin-left: 34px;
`;
