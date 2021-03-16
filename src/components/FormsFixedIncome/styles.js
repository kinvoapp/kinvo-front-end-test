import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`;

export const SelectFormContainer = styled.div`
  width: 155px;
  height: 32px;
`;

export const SelectedForm = styled.select`
  box-sizing: border-box;
  position: relative;
  border: 1px solid #d6d9dd;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  outline: 0;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
  `}
`;

export const Option = styled.option``;

export const InputTextContainer = styled.div`
  width: 24rem;
  height: 3.2rem;
  position: relative;
`;

export const InputText = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  border: 1px solid #d6d9dd;
  outline: 0;
  padding-left: 2.9rem;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
  `}
`;

export const ButtonSearch = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  background: none;
  border: 0;
  position: absolute;
  left: 0.9rem;
  outline: 0;
  cursor: pointer;
  top: 0.4rem;
`;
