/* eslint-disable react/prop-types */
import React from 'react';
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
