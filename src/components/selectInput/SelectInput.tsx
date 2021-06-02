import React from 'react';
import { ArrowSelect, Select, SelectContainer } from './SelectInput.styles';
import { SelectInputProps } from './SelectInput.types';


const SelectInput = (props: SelectInputProps) => {
  const { onChange, value, options } = props;

  const handleChange = (event: React.ChangeEvent<{ label?: string; value: string | number }>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <SelectContainer>
      <Select value={value} onChange={handleChange}>
        {options?.length > 0 && options?.map(option => <option value={option.value}>{option.label}</option>)}
      </Select>
      <ArrowSelect src="./public/assets/svg/angle-down.svg" width={10} height={10} />
    </SelectContainer>
  );
};

export default SelectInput;
