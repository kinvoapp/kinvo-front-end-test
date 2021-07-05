import React from 'react';
import PropTypes from 'prop-types';
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
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </Select>
  );
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};
