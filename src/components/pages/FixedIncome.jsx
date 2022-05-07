import { useEffect } from "react";

import styles from "./FixedIncome.module.css";

const FixedIncome = () => {
  const fixedIncomeData =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";
  const getData = async () => {
    const resp = await fetch(`${fixedIncomeData}`);
    const data = await resp.json();
    console.log(data);
  };

  getData();

  return <div className={styles.containerFixedIncome}>fixed income</div>;
};

export default FixedIncome;
