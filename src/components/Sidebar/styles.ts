import styled, { useTheme } from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.snow};
  
  max-width: 225px;
  width: 100%;
`