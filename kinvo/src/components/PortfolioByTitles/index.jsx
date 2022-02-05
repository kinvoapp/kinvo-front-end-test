import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { PortfolioByTitlesContainer, Title } from "./styles";

function PortfolioByTitles() {
  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: "",
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
      },
    ],
  };
  return (
    <PortfolioByTitlesContainer>
      <Title>Divisão de Carteira por Título</Title>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </PortfolioByTitlesContainer>
  );
}

export default PortfolioByTitles;
