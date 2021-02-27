import styled, { css } from 'styled-components';

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
  padding-right: 22px;

  h5 {
    font-size: 12px;
    font-weight: 600;
    color: #4e5b61;
  }
`;

const BaseDetailContainer = styled.div`
  span {
    font-size: 10px;
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
  flex: 1;

  h5 {
    font-size: 16px;
    color: #38bfa0;
  }
`;

export const DueContainer = styled(BaseDetailContainer)`
  flex: 1;

  h5 {
    font-size: 16px;
    color: #008dcb;
  }
`;
