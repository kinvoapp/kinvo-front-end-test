import styled from "@emotion/styled";
import React from "react";
import DoughnutChartTitle from "./DoughnutChartTitle";
import DoughnutChartType from "./DoughnutChartType";

const PieChartsWrapper = () => {
  return (
    <Container>
      <PieChartWrapper>
        <DoughnutChartType />
      </PieChartWrapper>
      <PieChartWrapper>
        <DoughnutChartTitle />
      </PieChartWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 448px;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;

const PieChartWrapper = styled.div`
  background: white;
  width: 540px;
  height: 550px;

  border-radius: 8px;
`;


export default PieChartsWrapper;
