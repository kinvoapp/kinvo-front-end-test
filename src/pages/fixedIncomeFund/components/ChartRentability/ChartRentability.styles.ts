import styled from 'styled-components';

export const ChartContainer = styled.div`
  padding: 16px;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  margin-top: 24px;
  max-height: 514px;

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

  .highcharts-credits {
    display: none;
  }

  div:first-child {
    margin-top: 24px;
  }
`;
