import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const YieldChart: React.FC = () => {
  const yieldChartData = [
    {
      name: "Mês",
      CDI: 8000,
      Portfolio: 4000,
    },
    {
      name: "Mês",
      CDI: 5000,
      Portfolio: 2500,
    },
    {
      name: "Mês",
      CDI: 10000,
      Portfolio: 2000,
    },
    {
      name: "Mês",
      CDI: 5000,
      Portfolio: 1500,
    },
    {
      name: "Mês",
      CDI: 6000,
      Portfolio: 1400,
    },
    {
      name: "Mês",
      CDI: 7000,
      Portfolio: 1200,
    },
    {
      name: "Mês",
      CDI: 6500,
      Portfolio: 1000,
    },
    {
      name: "Mês",
      CDI: 6000,
      Portfolio: 2100,
    },
    {
      name: "Mês",
      CDI: 7000,
      Portfolio: 3200,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="88%">
      <AreaChart
        data={yieldChartData}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="CDI"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="Portfolio"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default YieldChart;
