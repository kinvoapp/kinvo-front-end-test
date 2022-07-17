import styled from "@emotion/styled";
import React from "react";
import chart from "../assets/areaChart.svg";

const AreaChart = () => {
  return (
    <Container>
      <ChartImage></ChartImage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 350px;
  background: white;
  border-radius: 8px;
  margin-top: 20px;
`;

const ChartImage = styled.image`
  background-position-x: center;
  background-image: url(${chart});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: table;
`;

export default AreaChart;
