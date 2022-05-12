import { useState, useEffect } from "react";

import styles from "./FixedIncome.module.css";

import FixedIncomeInfo from "./FixedIncomeInfo";
import MyFixedIncome from "./MyFixedIncome";
import Pagination from "./Pagination";

import mychart from "../../assets/staticchart.svg";

const FixedIncome = () => {
  const [infoData, setInfoData] = useState();
  const [myFixedIncomeData, setFixedIncomeData] = useState();
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
    // console.log(data);
    setInfoData(data.snapshotByPortfolio);
    setFixedIncomeData(data.snapshotByProduct);
    // console.log(data.snapshotByProduct);
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

        <MyFixedIncome
          fixedIncomeData={myFixedIncomeData}
          currentPage={currentPage}
        />
        <Pagination
          fixedIncomeData={myFixedIncomeData}
          setCurrentPage={(e) => setCurrentPage(e)}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default FixedIncome;
