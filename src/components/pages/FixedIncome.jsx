import { useEffect } from "react";

const FixedIncome = () => {
  const fixedIncomeData =
    "https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData";
  const getData = async () => {
    const resp = await fetch(`${fixedIncomeData}`);
    const data = await resp.json();
    console.log(data);
  };

  getData();

  return <h1>fixed income</h1>;
};

export default FixedIncome;
