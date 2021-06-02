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

export const SnapshotByPortfolio = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  gap: 32px;
  padding-top: 6px;
`;

export const SnapshotByProduct = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  border-radius: 10px;
`;

export const HeaderSnapshot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.grey400};
  padding: 21px 19px;
  margin-top: 24px;
`;

export const Title = styled.div`
  color: ${props => props.theme.colors.grey700};
  font-size: 1.8rem;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const OrderBy = styled.div``;

export const SearchInput = styled.div`
  border: 1px solid ${props => props.theme.colors.grey400};
  height: 32px;
  width: 100%;
  max-width: 240px;
  padding: 6px;
  display: flex;
  align-items: center;

  border-radius: 10px;
  background: ${props => props.theme.colors.white};
  input {
    margin-left: 6px;
    border: 0;
    outline: none;
    height: 100%;
  }
`;

export const SnapshotContent = styled.div``;

export const SnapshotRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 24px 0;
  padding: 0 19px 24px 19px;

  border-bottom: 1px solid ${props => props.theme.colors.grey400};
  max-width: 100%;
`;

export const NavigationConteiner = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
  width: 100%;
  justify-content: center;

  button {
    border: 0;
    outline: 0;
    padding: 4px 8px;
    border-radius: 4px;
    background: ${props => props.theme.colors.grey300};
    transition: filter 0.15s ease-in-out;
    & + button {
      margin-left: 8px;
    }

    &:hover {
      filter: brightness(0.95);
    }

    &:disabled {
      cursor: default;
      filter: brightness(0.95);
    }
  }
`;

export const ChartContainer = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  margin-top: 24px;

  p {
    padding: 8px 0;
    font-size: 1.8rem;
    color: ${props => props.theme.colors.grey700};
  }

  .highcharts-legend {
    display: none;
  }

  .highcharts-point {
    display: none;
  }
`;
