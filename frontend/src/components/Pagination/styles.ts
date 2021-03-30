import styled from 'styled-components';

import arrowIcon from '../../assets/icons/arrow-icon.svg';

export const PageList = styled.ul`
  display: flex;
  justify-content: center;
  border-top: 1px solid #eef2f4;
  list-style: none;
  padding-top: 11px;
  gap: 10px;
  li {
    &.active {
      button {
        background: #dce0e3;
        font-size: 13px;
        font-weight: bold;
        color: white;
        border: none;
      }
    }
    button {
      font: 400 13px 'Montserrat', sans-serif;
      color: #c2c5cc;
    }
  }

  button {
    width: 35px;
    height: 35px;
    border: 1px solid #edeef0;
    background: white;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 3%);
    transition: 0.3s ease-out;
    &.previous,
    &.next {
      background: url(${arrowIcon}) 14px center no-repeat;
    }
    &.previous {
      transform: rotate(180deg);
    }
    &:disabled {
      opacity: 0.5;
      background-color: #f5f5f5;
    }
  }
`;
