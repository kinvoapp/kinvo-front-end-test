import styled from 'styled-components';

interface CardProps {
  expanded?: boolean;
}

export const Container = styled.div<CardProps>`
  background: ${props => props.theme.colors.snow};
  border-radius: 10px;
  flex: ${props => props.expanded ? 1 : 'unset'};
  overflow: hidden;
`