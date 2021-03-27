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
        <MenuItem value="" />
        { options?.map((option) => <MenuItem value={option.value}>{option.content}</MenuItem>) }
      </SelectField>
    </Container>
  )
};

export default Select;