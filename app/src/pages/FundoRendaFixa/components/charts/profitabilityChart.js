import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import axios from '../../../../services/axios';

export default function ProfitabilityChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.dailyEquityByPortfolioChartData);
      })
      .catch((e) => {
        return e;
      });
  });

  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  };

  const Data = {
    datasets: [
      {
        data: data.map((item) => item.correctedQuota),
        borderColor: '#4c309b',
        backgroundColor: 'rgba(15, 72, 248, 0.3)',
        borderWidth: 2,
        radius: 0,
        pointStyle: 'dash',
        tension: 0.4,
        borderCapStyle: 'square',
        borderJoinStyle: 'round',
        fill: {
          target: 'origin',
        },
      },
    ],
    labels: data.map((item) => {
      const date = new Date(item.dailyReferenceDate);
      return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'short',
      }).format(date);
    }),
  };
  return <Line options={options} data={Data} />;
}
