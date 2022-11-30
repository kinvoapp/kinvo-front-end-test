import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from '../../../../services/axios';

export default function PortfolioBreakdownByTytle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get()
      .then((res) => {
        setData(res.data.data.snapshotByProduct);
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
        position: 'bottom',
        align: 'center',
      },
    },
    layout: {
      padding: 30,
    },
  };

  const Data = {
    datasets: [
      {
        data: data.map((item) => {
          return item.position.equity;
        }),
        backgroundColor: [
          '#0DD1E3',
          '#FF8052',
          '#9E51BA',
          ' #707b81',
          '#4c309b',
          '#707b81',
        ],
      },
    ],
    labels: data.map((item) => {
      const legend = [];
      const arr = item.fixedIncome.name.split('(');
      legend.push(arr[0]);
      return legend;
    }),
  };
  return <Doughnut options={options} data={Data} />;
}
