import React, {
  useState,
  useCallback,
  ChangeEventHandler,
  SelectHTMLAttributes
} from 'react';

import { Container } from './styles';

interface SelectOption {
  value: string;
  label: string;
}

export type SelectChangeHandler = (option: SelectOption) => void;

type BaseSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'onChange'
>;

interface SelectProps extends BaseSelectProps {
  options: SelectOption[];
  onChange?: SelectChangeHandler;
}

export const Select: React.FC<SelectProps> = ({
  onChange,
  options,
  placeholder,
  ...rest
}) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    e => {
      setValue(e.target.value);

      const selected = options.find(option => option.value === e.target.value);
      if (onChange && selected) onChange(selected);
    },
    [onChange, options]
  );

  return (
    <Container>
      <select value={value} onChange={handleChange} {...rest}>
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map(selectOption => (
          <option key={selectOption.value} value={selectOption.value}>
            {selectOption.label}
          </option>
        ))}
      </select>
    </Container>
  );
};
