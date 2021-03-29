import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Pagination as PaginationLab } from '@material-ui/lab';
import colors from '../../../constants/colors';

export const IncomeName = styled.span`
  color: ${colors.blackText};
  font-size: 12px;
  font-weight: 500;
`;

export const CardRow = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 15px 20px;
  background-color: ${props => props.index % 2 === 0 ? colors.white : '#F8FAFB'};
`;

export const MyFixedIncomeHeader = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  padding: 15px 0;
`;

export const MyFixedIncomeFooter = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 15px 0;
`;

export const Pagination = styled(PaginationLab)`
  color: ${colors.grayBorder};
  & .MuiPaginationItem-outlined {
    border-color: ${colors.grayBorder};
    color: #cccccc;
  }
  & .MuiPaginationItem-root {
    color: #cccccc;
  }
  & .MuiPaginationItem-page.Mui-selected {
    background-color: ${colors.grayBorder};
    color: ${colors.white};
  }
`;
