import React from "react";

import {
  Container,
  StyledSelect,
  StyledOption,
  ContainerProps,
} from "./styles";

type Option = {
  label: string;
  value?: string;
};

type SelectProps = {
  options: Option[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => any;
  defaultLabel?: string;
  margin?: ContainerProps["margin"];
  padding?: ContainerProps["padding"];
};

function Select({ options, onChange, defaultLabel, ...props }: SelectProps) {
  return (
    <Container {...props}>
      <StyledSelect defaultValue="" onChange={onChange}>
        {defaultLabel && <option value="">{defaultLabel}</option>}
        {options.map((option, idx) => (
          <StyledOption key={idx} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </StyledSelect>
    </Container>
  );
}

export default Select;
