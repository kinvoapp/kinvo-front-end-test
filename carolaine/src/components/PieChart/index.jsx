import React, { useEffect, useState } from "react";
import { Container, PageTitle } from "./style";
import {
  PieChart as Chart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PieChart = (props) => {
  const [dataChart, setDataChart] = useState();
  console.log(dataChart);

  useEffect(() => {
    if (props.data) {
      setDataChart(props.data.data.dailyEquityByPortfolioChartData);
    }
  }, [props.data]);

  const data02 = [
    { name: "Group A", value: 2400 },
    { name: "Group B", value: 4567 },
    { name: "Group C", value: 1398 },
    { name: "Group D", value: 9800 },
    { name: "Group E", value: 3908 },
    { name: "Group F", value: 4800 },
  ];

  const COLORS = ["#FF8052", "#0DD1E3", "#9E51BA"];

  return (
    <Container>
      <PageTitle>{props.title}</PageTitle>

      <ResponsiveContainer width="100%" height="100%">
        <Chart width={300} height={250}>
          <Pie
            dataKey="value"
            data={dataChart}
            cx="50%"
            cy="30%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            {data02.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
        </Chart>
      </ResponsiveContainer>
    </Container>
  );
};

export default PieChart;
