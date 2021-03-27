import styled from 'styled-components';
import {
  FormControl,
  Select,
} from '@material-ui/core';

export const Container = styled(FormControl)`
  flex: 1;
  width: 100%;
  font-size: 13px;
  & .MuiOutlinedInput-root {
    border-color: #D6D9DD;
    border-radius: 10px;
    font-size: 13px;
  }
  & .MuiInputLabel-outlined {
    transform: translate(14px, 9px) scale(1);
    font-size: 13px;
  }
`;

export const SelectField = styled(Select)`
  & .MuiSelect-outlined {
    padding: 8px;
  }
`;
