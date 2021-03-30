import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  width: 9.75rem;
  padding: 0 0.625rem;

  grid-area: div;
  display: flex;
  justify-self: right;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.menu};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.border.box};

  :hover {
    background: ${({ theme }) => theme.background.focus};
  }

  div {
    width: 9.75rem;
    padding: 0.5rem 0.325rem;
    left: 0;
    top: calc(100% + 0.25rem);
    z-index: 4;

    position: absolute;
    display: flex;
    flex-direction: column;

    background: ${({ theme }) => theme.background.component};
    font-size: 0.75rem;
    color: ${({ theme }) => theme.text.menu};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.border.box};
  }
`;

interface OptionProps {
  selected?: boolean;
}

export const Option = styled.p<OptionProps>`
  padding: 0.25rem 0.3rem;

  border-radius: 999px;

  background: ${({ selected, theme }) =>
    selected ? theme.background.focus : theme.background.component};
  font-weight: ${({ selected }) => (selected ? 700 : 500)};

  :hover {
    background: ${({ selected, theme }) =>
      darken(
        0.025,
        selected ? theme.background.focus : theme.background.component
      )};
  }
`;
