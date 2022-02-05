import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import { TitlesProfitabilityContainer, Title } from "./styles";

function TitlesProfitability() {
  const options = {
    chart: {
      type: "area",
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
    <TitlesProfitabilityContainer>
      <Title>Rentabilidade dos Títulos</Title>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </TitlesProfitabilityContainer>
  );
}

export default TitlesProfitability;
