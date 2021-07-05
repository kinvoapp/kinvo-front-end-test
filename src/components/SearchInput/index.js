import React from 'react';
import PropTypes from 'prop-types';
import MagnifyingGlass from '../../assets/magnifying-glass.png';
import { Input } from './styles';

export const SearchInput = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      style={{ backgroundImage: `url(${MagnifyingGlass})` }}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
