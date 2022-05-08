import { useEffect } from "react";

import styles from "./FixedIncome.module.css";
import FixedIncomeInfo from "./FixedIncomeInfo";

const FixedIncome = () => {
  const fixedIncomeData =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";

  useEffect(() => {
    fetch(fixedIncomeData)
      .then((res) => res.json())
      .then((data) => () => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const infoData = [];
  const myFidexIncomeData = [];
  const donutChartData = [];

  function setData(data) {
    console.log(data);
    infoData.push(data.snapshotByPortfolio);
  }

  return (
    <div className={styles.containerFixedIncome}>
      <div>
        <h1 className={styles.title}>Renda Fixa</h1>
      </div>
      {/* <FixedIncomeInfo text="saldo bruto" number={getInfoData} /> */}
    </div>
  );
};

export default FixedIncome;
