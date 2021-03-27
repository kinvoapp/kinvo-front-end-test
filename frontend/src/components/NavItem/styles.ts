import styled from 'styled-components';

// Icons
import arrowIcon from '../../assets/icons/arrow-icon.svg';

// Interface
import { NavItemImg } from '../../interfaces/NavItem.interface';

export const Item = styled('li')<NavItemImg>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px 0 17px 14px;
  border-bottom: 1px solid #cccfd1;
  h3 {
    color: #707b81;
    font-size: 13px;
    font-weight: 500;
    white-space: pre-line;
    line-height: 16px;
    padding-left: 14px;
    text-transform: capitalize;
  }
  &:before {
    content: '';
    width: 34px;
    height: 34px;
    display: flex;
    border-radius: 50%;
    background: #dae0e3 url(${props => props.icon}) center no-repeat;
  }
  &:after {
    content: '';
    width: 6px;
    height: 9px;
    background: url(${arrowIcon}) center no-repeat;
    margin: 0 15px 0 auto;
    display: flex;
  }
`;
