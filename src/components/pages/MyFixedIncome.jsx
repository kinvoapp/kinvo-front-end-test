import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Select from "../layout/Select";
import Input from "../layout/Input";

import FixedIncomeItem from "./FixedIncomeItem";

import styles from "./MyFixedIncome.module.css";

const MyFixedIncome = ({ fixedIncomeData }) => {
  //   const [order, setOrder] = useState();
  // const options = []
  //   console.log(fixedIncomeData);

  return (
    <div className={styles.containerfixedincome}>
      <div className={styles.fidexincomeheader}>
        <div>
          <h3 className={styles.title}>Minhas Rendas Fixas</h3>
        </div>
        <div className={styles.containerfilters}>
          <Select options={["opções", "opção 1", "opção 2"]} />
          <Input />
        </div>
      </div>
      {fixedIncomeData &&
        fixedIncomeData.map((data, index) => (
          <FixedIncomeItem
            key={uuidv4()}
            due={data.due}
            fixedIncome={data.fixedIncome}
            position={data.position}
            backgroudLightGray={(index + 1) % 2 === 0}
          />
        ))}
    </div>
  );
};

export default MyFixedIncome;
