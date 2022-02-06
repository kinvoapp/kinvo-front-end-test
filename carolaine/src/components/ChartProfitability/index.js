import React, { PureComponent, useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Container, PageTitle } from "./style";

const ChartProfitability = ({ data }) => {
  const [dataChart, setDataChart] = useState();

  // console.log(dataChart);

  useEffect(() => {
    if (data) {
      setDataChart(data.data.dailyEquityByPortfolioChartData);
    }
  }, [data]);

  return (
    <Container>
      <PageTitle>Rentabilidade dos Títulos</PageTitle>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          width={500}
          height={400}
          data={dataChart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="productName" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="correctedQuota"
            stackId="1"
            stroke="#56D9FE"
            fill="#56D9FE"
          />
          <Area
            type="monotone"
            dataKey="value"
            stackId="1"
            stroke="#A3A1FB"
            fill="#A3A1FB"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default ChartProfitability;
