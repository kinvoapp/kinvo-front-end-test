import styled from 'styled-components';
import { Container as Card } from '../Card/styles';

export const Container = styled.div`
  background: ${props => props.theme.colors.snow};
  border-radius: 10px;

  > header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    .search-area {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 1rem;
    }
  }

  .input-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${props => props.theme.colors.gray[100]};
    padding: 0.5rem;
    border-radius: 0.625rem;
    width: 240px;

}
`

export const Select = styled.select`
  width: 160px;
  border-radius: 0.625rem;
  border: 1px solid ${props => props.theme.colors.gray[100]};
  padding: 0.5rem;

  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray[450]};
`

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  margin-left: 0.5rem;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray[450]};
`

export const Row = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;

  &:nth-child(even) { background-color:${props => props.theme.colors.gray[50]} }
  &:nth-child(odd) { background-color: ${props => props.theme.colors.snow} }
  color: ${props => props.theme.colors.gray[500]};

  header {
    font-size: 0.563rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

`