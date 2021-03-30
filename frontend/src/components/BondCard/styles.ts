import styled from 'styled-components';

import infoIcon from '../../assets/icons/info-icon.svg';

export const BondCardItem = styled.div`
  border: 1px solid #dae0e3;
  border-radius: 10px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 8px 10px;
  background-color: white;
  &.bond {
    flex: 0.6;
    p {
      color: #8a51ba;
      text-transform: capitalize;
      font-size: 14px;
      &.bondType {
        white-space: nowrap;
      }
    }
  }
  &.position p {
    white-space: nowrap;
  }
  &.due {
    flex: 0;
    p {
      color: #008dcb;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 !important;
    h3 {
      font-size: 9px !important;
      text-transform: uppercase;
      letter-spacing: 0.75px;
      color: #4e5b61;
    }

    .tooltip {
      position: relative;
      display: inline-block;
      margin-left: 10px;

      &:before {
        content: '';
        width: 14px;
        height: 14px;
        display: flex;
        background: url(${infoIcon}) center no-repeat;
      }

      &:hover .info {
        visibility: visible;
        opacity: 1;
      }

      .info {
        visibility: hidden;
        width: 120px;
        background-color: dodgerblue;
        color: white;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;

        &:after {
          content: '';
          position: absolute;
          top: 100%;
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: #555 transparent transparent transparent;
        }
      }
    }
  }
`;

export const ValueList = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  gap: 15px;
  h3 {
    width: 160px;
    font-size: 12px;
    line-height: 16px;
    color: #4e5b61;
    font-weight: 500;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`;

export const ValueItem = styled.div`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  h4,
  p {
    font-weight: 500;
  }
  h4 {
    color: #4e5b61;
    font-size: 9px;
    letter-spacing: 0.75px;
    margin-bottom: 5px;
    white-space: nowrap;
  }
  p {
    font-size: 16px;
    color: #38bfa0;
  }
`;
