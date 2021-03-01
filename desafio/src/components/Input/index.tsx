import React, {
  InputHTMLAttributes,
  useState,
  useCallback,
  ChangeEventHandler
} from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onTextChange?: (value: string) => void;
  leftIcon?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  onTextChange,
  leftIcon,
  ...rest
}) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    e => {
      setValue(e.target.value);

      if (onChange) onChange(e);
      if (onTextChange) onTextChange(e.target.value);
    },
    [onChange, onTextChange]
  );

  return (
    <Container>
      {leftIcon && <img src={leftIcon} alt="input icon" />}

      <input value={value} onChange={handleChange} {...rest} />
    </Container>
  );
};
