import React, { useEffect, useState } from "react";
import { Container, PageTitle } from "./style";
import {
  PieChart as Chart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const PieChart = (props) => {
  const [dataChart, setDataChart] = useState();

  useEffect(() => {
    if (props.data) {
      setDataChart(props.data.data.dailyEquityByPortfolioChartData);
    }
  }, [props.data]);

  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Container>
      <PageTitle>{props.title}</PageTitle>

      <ResponsiveContainer width="100%" height="100%">
        <Chart width={600} height={600}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </Chart>
      </ResponsiveContainer>
    </Container>
  );
};

export default PieChart;
