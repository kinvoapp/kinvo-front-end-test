import React from 'react';
import {
  InputLabel,
  MenuItem
} from '@material-ui/core';
import { Container, SelectField } from './styles';

function Select(props) {
  const { value, onChange, label, options } = props;
  return (
    <Container variant="outlined">
      <InputLabel id="select-label">{label}</InputLabel>
      <SelectField
        labelId="select-label"
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value)}
      >
        { options?.map((option) => <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>) }
      </SelectField>
    </Container>
  )
};

export default Select;