import styled from 'styled-components';
import {
  TextField,
} from '@material-ui/core';

export const Input = styled(TextField)`
  & .MuiOutlinedInput-input {
    padding: 8px 8px 8px 0;
  }
  & .MuiOutlinedInput-root {
    border-color: #D6D9DD;
    border-radius: 10px;
    font-size: 13px;
  }
`;
