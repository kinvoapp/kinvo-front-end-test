import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useContext } from 'react';
import { IncomeContext } from '../../contexts/income';
import { Card } from '../Card';
import { Container } from './styles';

export function MainChart() {
  const { fullData: { dailyEquityByPortfolioChartData } } = useContext(IncomeContext);

  const reducedData = dailyEquityByPortfolioChartData.reduce((obj, { productName, ...detail }) => {
    if (!obj[productName]) obj[productName] = [];
    obj[productName].push(detail.correctedQuota);
    return obj;
  }, {} as any);

  const formattedData = Object.keys(reducedData).map(item => {
    return {
      name: item,
      data: reducedData[item]
    };
  });

  const starterOptions = {
    chart: {
      type: 'area'
    },
    title: {
      text: ''
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    series: formattedData
  }

  return (
    <Card>
      <Container>
        <h2>Rentabilidade dos Títulos</h2>
        <HighchartsReact
          highcharts={Highcharts}
          options={starterOptions}
        />
      </Container>
    </Card>
  )
}
