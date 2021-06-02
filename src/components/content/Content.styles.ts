import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-bottom: 16px;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.purple700};
  }
`;
