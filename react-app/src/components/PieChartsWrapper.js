import styled from "@emotion/styled";
import React from "react";
import pieChart1 from "../assets/pieChart1.png";
import pieChart2 from "../assets/pieChart2.png";

const PieChartsWrapper = () => {
  return (
    <Container>
      <PieChartWrapper>
        <PieChart1 />
      </PieChartWrapper>
      <PieChartWrapper>
        <PieChart2 />
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
  height: 450px;

  border-radius: 8px;
`;

const PieChart1 = styled.image`
  background-position-x: center;
  background-image: url(${pieChart1});
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  display: table;
`;

const PieChart2 = styled(PieChart1)`
  background-image: url(${pieChart2});
`;

export default PieChartsWrapper;
