import React, { useEffect, useState } from "react";
import { Container, PageTitle } from "./style";

const PieChart = ({ data, title }) => {
  const [dataChart, setDataChart] = useState();

  useEffect(() => {
    if (data) {
      setDataChart(data.data.dailyEquityByPortfolioChartData);
    }
  }, [data]);

  return (
    <Container>
      <PageTitle>{title}</PageTitle>
    </Container>
  );
};

export default PieChart;
