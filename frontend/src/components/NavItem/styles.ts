import styled from 'styled-components';

// Icons
import arrowIcon from '../../assets/icons/arrow-icon.svg';

// Interface
import { NavItemImg } from '../../interfaces/NavItem.interface';

export const Item = styled('li')<NavItemImg>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 0 0 0;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(204, 207, 209, 0.5);
  position: relative;
  &.active {
    background: #f8fafb;
    &:before {
      background-color: #4c309b;
    }
  }
  h3 {
    color: #707b81;
    font-size: 13px;
    font-weight: 500;
    white-space: pre-line;
    line-height: 16px;
    padding: 0 0 17px 14px;
    display: flex;
    text-transform: capitalize;
  }
  &:before {
    content: '';
    width: 34px;
    height: 34px;
    display: flex;
    border-radius: 50%;
    margin: 0 0 17px 14px;
    background: #dae0e3 url(${props => props.icon}) center no-repeat;
  }
  &:after {
    content: '';
    width: 6px;
    height: 9px;
    background: url(${arrowIcon}) center no-repeat;
    display: flex;
    position: absolute;
    right: 15px;
    top: 28px;
  }

  ul {
    display: flex;
    flex-direction: column;
    flex: 1fr;
    li {
      display: flex;
      align-items: center;
      border-top: 1px solid rgba(204, 207, 209, 0.5);
      padding: 15px 0 15px 22px;
      font: 500 13px 'Montserrat', sans-serif;
      background: white;
      transition: 0.3s ease-out;
      position: relative;
      cursor: pointer;
      &:hover {
        background: #f8fafb;
      }
      &:before {
        width: 6px;
        height: 6px;
        display: flex;
        border-radius: 50%;
        content: '';
        background: #4c309b;
        margin-right: 10px;
      }
      &:after {
        content: '';
        width: 6px;
        height: 9px;
        background: url(${arrowIcon}) center no-repeat;
        display: flex;
        position: absolute;
        right: 15px;
        top: 18px;
      }
    }
  }
`;
