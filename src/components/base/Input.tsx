import styled from "styled-components";
import { getTheme } from "../../styles/theme";
import { HTMLAttributes } from "react";

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
  padding: 0rem 0.5rem;
  border-radius: 0.75rem;
  border: solid 2px ${(props) => getTheme(props).background.main};
`;

const InputElement = styled.input`
  border: none;
  font-family: "Montserrat";

  &:focus {
    outline: none;
  }
`;

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  value?: string;
}

export function Input({
  startAdornment,
  endAdornment,
  ...inputProps
}: InputProps) {
  return (
    <>
      <InputWrapper>
        {startAdornment}
        <InputElement {...inputProps}></InputElement>
        {endAdornment}
      </InputWrapper>
    </>
  );
}
