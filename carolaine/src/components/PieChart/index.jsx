import React, { useEffect, useState } from "react";
import { Container, PageTitle, List, ListItem } from "./style";
import {
  PieChart as Chart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const PieChartType = (props) => {
  const [dataChart, setDataChart] = useState();

  useEffect(() => {
    if (props.data) {
      setDataChart(props.data.data.dailyEquityByPortfolioChartData);
    }
  }, [props.data]);

  const COLORS = ["#0DD1E3", "#FF8052", "#9E51BA"];

  return (
    <Container>
      <PageTitle>{props.title}</PageTitle>

      <ResponsiveContainer width="100%" height={180}>
        <Chart width={300} height={180}>
          <Pie
            dataKey="movementTypeId"
            data={dataChart}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            {dataChart
              ? dataChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              : null}
          </Pie>

          <Tooltip />
        </Chart>
      </ResponsiveContainer>
      <List>
        <ListItem>Tipo</ListItem>
        <ListItem>Tipo</ListItem>
        <ListItem>Tipo</ListItem>
        <ListItem>Tipo</ListItem>
        <ListItem>Tipo</ListItem>
        <ListItem>Tipo</ListItem>
      </List>
    </Container>
  );
};

export const PieChartIndexes = (props) => {
  const [dataChart, setDataChart] = useState();

  useEffect(() => {
    if (props.data) {
      setDataChart(props.data.data.dailyEquityByPortfolioChartData);
    }
  }, [props.data]);

  const COLORS = ["#9E51BA", "#FF8052", "#0DD1E3"];

  return (
    <Container>
      <PageTitle>{props.title}</PageTitle>

      <ResponsiveContainer width="100%" height={180}>
        <Chart width={300} height={180}>
          <Pie
            dataKey="portfolioProductId"
            data={dataChart}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            {dataChart
              ? dataChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))
              : null}
          </Pie>

          <Tooltip />
        </Chart>
      </ResponsiveContainer>
      <List>
        <ListItem>Título</ListItem>
        <ListItem>Título</ListItem>
        <ListItem>Título</ListItem>
        <ListItem>Título</ListItem>
        <ListItem>Título</ListItem>
        <ListItem>Título</ListItem>
      </List>
    </Container>
  );
};
