import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { PortfolioByTypesContainer, Title } from "./styles";

function PortfolioByTypes() {
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
    <PortfolioByTypesContainer>
      <Title>Divisão de Carteira por Tipos</Title>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </PortfolioByTypesContainer>
  );
}

export default PortfolioByTypes;
