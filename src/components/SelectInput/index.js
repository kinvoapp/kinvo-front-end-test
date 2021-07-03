/* eslint-disable react/prop-types */
import React from 'react';
import Arrow from '../../assets/arrow.png';
import { Select } from './styles';

export const SelectInput = ({ options, onChange, defaultValue }) => {
  return (
    <Select
      value={defaultValue}
      onChange={onChange}
      style={{ backgroundImage: `url(${Arrow})` }}
    >
      <option value="OrdenarPor" disabled>
        Ordenar Por
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </Select>
  );
};
