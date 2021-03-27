import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled.div`
  background-color: #EEF2F4;
  padding: 25px 20px;
  flex: 1;
`;

export const Title = styled.span`
  color: #4C309B;
  font-size: 18px;
  font-weight: 700;
`;

export const IncomeName = styled.span`
  color: #4E5B61;
  font-size: 12px;
  font-weight: 500;
`;

export const IncomeTitle = styled.span`
  color: #4E5B61;
  font-size: 9px;
  text-transform: uppercase;
`;

export const IncomeValue = styled.span`
  color: ${props => props.color};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;

export const IncomeInfo = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

export const IncomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 15px 20px;
  background-color: ${props => props.index % 2 === 0 ? '#FFFFFF' : '#F8FAFB'}
`;
