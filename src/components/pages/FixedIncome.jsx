import { useState, useEffect } from "react";

import styles from "./FixedIncome.module.css";

import FixedIncomeInfo from "./FixedIncomeInfo";
import MyFixedIncome from "./MyFixedIncome";
import Pagination from "./Pagination";

import mychart from "../../assets/staticchart.svg";
import ChartContainer from "./ChartContainer";

const FixedIncome = () => {
  const [infoData, setInfoData] = useState();
  const [myFixedIncomeData, setFixedIncomeData] = useState();
  const [chartData, setChartData] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const fixedIncomeData =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  useEffect(() => {
    fetch(fixedIncomeData)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  function setData(data) {
    setInfoData(data.snapshotByPortfolio);
    setFixedIncomeData(data.snapshotByProduct);
    setChartData(data.dailyEquityByPortfolioChartData);
  }

  const pieChartOptions = {
    pieHole: 0.6,
    legend: { position: "bottom" },
    pieSliceText: "none",
    width: "500px",
    chartArea: { top: 30, width: "100%", height: "70%" },
  };

  const dataPerTitle = [["title", "title value"]];
  const dataPerType = [["type", "type value"]];

  console.log(chartData);

  function prepareChartData() {
    let acc = 0;

    function filterChartDataTitle(title) {
      acc = 0;
      for (let i = 0; i < chartData.length; i++) {
        // Uses the title to filter the array and accumulate the value
        if (chartData[i].productName.indexOf(title) > -1) {
          acc += chartData[i].correctedQuota;
        }
        if (i == chartData.length - 1) {
          dataPerTitle.push([title, Number(acc.toFixed(2))]);
        }
      }
    }

    filterChartDataTitle("CDB Pré XP INVESTIMENTOS CCTVM (9,5% a.a.)");
    filterChartDataTitle("Tesouro IPCA+ com Juros Semestrais 2024 (NTNB)");
    filterChartDataTitle("LC XP INVESTIMENTOS CCTVM (CDI + 104% a.a.)");

    function filterChartDataType(type) {
      acc = 0;
      for (let i = 0; i < chartData.length; i++) {
        // Uses the type to filter the array and accumulate the value
        if (chartData[i].productName.indexOf(type) > -1) {
          acc += chartData[i].correctedQuota;
        }
        if (i == chartData.length - 1) {
          dataPerType.push([type, Number(acc.toFixed(2))]);
        }
      }
    }

    filterChartDataType("CDB");
    filterChartDataType("CDI");
    filterChartDataType("Tesouro IPCA+");
  }

  if (chartData) {
    prepareChartData();
  }

  return (
    <div className={styles.containerFixedIncome}>
      <div className={styles.fixedIncomeContent}>
        <h1 className={styles.title}>Renda Fixa</h1>

        {infoData ? (
          <div className={styles.containerFixedIncomeContentData}>
            <FixedIncomeInfo text="saldo bruto" number={infoData.equity} />
            <FixedIncomeInfo
              text="valor aplicado"
              number={infoData.valueApplied}
            />
            <FixedIncomeInfo text="resultado" number={infoData.equityProfit} />
            <FixedIncomeInfo
              text="rentabilidade"
              number={infoData.percentageProfit}
              percentage={true}
            />
            <FixedIncomeInfo
              text="cdi"
              number={infoData.indexerValue}
              percentage={true}
            />
            <FixedIncomeInfo
              text="% sobre cdi"
              number={infoData.percentageOverIndexer}
              percentage={true}
            />
          </div>
        ) : (
          <FixedIncomeInfo text={"carregando"} number={"carregando"} />
        )}

        <div className={styles.staticchart}>
          <img src={mychart} alt="gráfico" />
        </div>
        {myFixedIncomeData ? (
          <>
            <MyFixedIncome
              fixedIncomeData={myFixedIncomeData}
              currentPage={currentPage}
            />
            <Pagination
              fixedIncomeData={myFixedIncomeData}
              setCurrentPage={(e) => setCurrentPage(e)}
              currentPage={currentPage}
            />
            <div className={styles.containercharts}>
              {chartData && (
                <>
                  <ChartContainer
                    chartData={dataPerType}
                    chartType="PieChart"
                    chartOptions={pieChartOptions}
                    customStyle="containerPieChart"
                    title="Divisão de Carteira por Tipos"
                  />
                  <ChartContainer
                    chartData={dataPerTitle}
                    chartType="PieChart"
                    chartOptions={pieChartOptions}
                    customStyle="containerPieChart"
                    title="Divisão de Carteira por Titulos"
                  />
                </>
              )}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FixedIncome;
