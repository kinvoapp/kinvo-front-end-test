import React from 'react';

import { format, isAfter, isBefore } from 'date-fns';
import ptLocale from 'date-fns/locale/pt-BR';

import { DailyEquityByPortfolio } from '../../../@types/DailyEquityByPortfolio';
import { Chart } from '../../../components';
import { Container } from './styles';

type ChartDataSerie = {
  productId: number;
  name: string;
  data: number[];
  type: 'areaspline';
  color?: string;
};

interface DailyEquityByPortfolioChartProps {
  chartData: DailyEquityByPortfolio[];
}

export const DailyEquityByPortfolioChart: React.FC<DailyEquityByPortfolioChartProps> = ({
  chartData
}) => {
  const chartDataParsed = chartData.map(item => {
    const dailyReferenceDateParsed = new Date(item.dailyReferenceDate * 1000);

    return { ...item, dailyReferenceDateParsed };
  });

  function getXAxisCategories(): string[] {
    const categories = chartDataParsed.map(item => {
      const dailyReferenceParsed = item.dailyReferenceDateParsed;

      return format(dailyReferenceParsed, 'dd/MM/yyyy', { locale: ptLocale });
    });

    return categories;
  }

  const xAxisCategories = getXAxisCategories();

  function getSeries() {
    const chartDataOrderByDate = chartDataParsed.sort((a, b) => {
      if (isBefore(a.dailyReferenceDateParsed, b.dailyReferenceDateParsed))
        return -1;

      if (isAfter(a.dailyReferenceDateParsed, b.dailyReferenceDate)) return 1;

      return 0;
    });

    const colors = ['#56D9FE', '#A3A1FB'];

    let productsSerie: ChartDataSerie[] = chartDataOrderByDate.map(item => {
      return {
        productId: item.portfolioProductId,
        name: item.productName,
        data: [item.correctedQuota],
        type: 'areaspline'
      };
    });

    productsSerie = productsSerie.reduce((acc, currrentProduct) => {
      const findProductIndex = acc.findIndex(
        item => item.productId === currrentProduct.productId
      );

      if (findProductIndex >= 0) {
        acc[findProductIndex].data.push(...currrentProduct.data);
      } else {
        acc.push(currrentProduct);
      }

      return acc;
    }, [] as ChartDataSerie[]);

    productsSerie = productsSerie.map((product, index) => {
      let color;
      if (colors.length > index) color = colors[index];
      return { ...product, color };
    });

    return productsSerie;
  }

  const series = getSeries();

  return (
    <Container>
      <Chart
        containerProps={{ style: { height: 350 } }}
        options={{
          chart: { type: 'areaspline' },
          legend: { enabled: false },
          credits: { enabled: false },
          title: {
            text: 'Rentabilidade dos Títulos',
            align: 'left',
            style: {
              fontFamily: 'Montserrat',
              fontSize: '18px',
              fontWeight: '500',
              color: '#627179'
            }
          },
          series,
          xAxis: {
            categories: xAxisCategories
          },
          yAxis: { title: { text: '' } },
          tooltip: {
            shared: true,
            valuePrefix: 'R$ ',
            valueSuffix: ''
          }
        }}
      />
    </Container>
  );
};
