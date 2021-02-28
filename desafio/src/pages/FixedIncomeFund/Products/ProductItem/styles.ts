import styled, { css } from 'styled-components';

import { Card } from '../../../../components';

interface ContainerProps {
  invert?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 20px;

  ${props =>
    props.invert &&
    css`
      background-color: #f8fafb;
    `}

  > div {
    & + div {
      margin-left: 8px;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  flex: 1;
  padding-right: 10px;

  h5 {
    width: 180px;
    font-size: 12px;
    font-weight: 600;
    color: #4e5b61;
  }
`;

const BaseDetailContainer = styled.div`
  span {
    font-size: 9px;
    font-weight: 500;
    text-transform: uppercase;
    color: #4e5b61;
  }

  h5 {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const BondTypeContainer = styled(BaseDetailContainer)`
  h5 {
    color: #8a51ba;
  }
`;

export const PositionContainer = styled(BaseDetailContainer)`
  h5 {
    color: #38bfa0;
  }
`;

export const DueContainer = styled(BaseDetailContainer)`
  & + div {
    margin-left: 20px;
  }

  span {
    width: 100%;
  }

  h5 {
    color: #008dcb;
  }
`;

export const CardName = styled(Card)`
  min-width: 330px;
  width: 100%;
  flex: 0;
`;

export const CardPosition = styled(Card)`
  flex: 1;
`;

export const CardDue = styled(Card)`
  min-width: 220px;
  flex: 0;
`;
