import React from 'react';
import { Input } from './styles';
import { InputAdornment } from '@material-ui/core';

function TextField(props) {
  const { value, onChange, label, icon } = props;
  return (
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      variant="outlined"
      InputProps={{
        startAdornment: icon ? (
          <InputAdornment position="start">
            {icon}
          </InputAdornment>
        ) : null,
      }}
    />
  )
};

export default TextField;