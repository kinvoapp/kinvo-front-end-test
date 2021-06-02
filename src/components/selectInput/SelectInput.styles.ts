import SvgIcon from '@components/svgIcon/SvgIcon';
import styled from 'styled-components';

export const Select = styled.select`
  min-width: 216px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.grey400};
  height: 32px;
  width: 100%;

  padding: 6px;
  display: flex;
  align-items: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 10px;
  background: ${props => props.theme.colors.white};

  &::-ms-expand {
    display: none;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* input {
    margin-left: 6px;
    border: 0;
    outline: none;
    height: 100%;
  } */
`;

export const ArrowSelect = styled(SvgIcon)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: ${props => props.theme.global.gutterSpace}px;
  pointer-events: none;
  fill: ${props => props.theme.colors.grey700};
  transition: background-color 150ms ease-in, transform 180ms linear;
`;

export const SelectContainer = styled.div`
  position: relative;
`;
