import styled, { useTheme } from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.snow};

  header {
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0 1.75rem;
  }
`