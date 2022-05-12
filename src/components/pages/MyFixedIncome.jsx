// import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Select from "../layout/Select";
import Input from "../layout/Input";

import FixedIncomeItem from "./FixedIncomeItem";

import styles from "./MyFixedIncome.module.css";
import { useState } from "react";

const MyFixedIncome = ({ fixedIncomeData, currentPage }) => {
  //   const [order, setOrder] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  let nOfItemPerPage = 5;

  // changes the page elements depedin of wicht page we are
  const firstIndex = nOfItemPerPage * (currentPage - 1);
  const lastIndex = nOfItemPerPage * currentPage - 1;
  console.log(fixedIncomeData);
  return (
    <div className={styles.containerfixedincome}>
      <div className={styles.fidexincomeheader}>
        <div>
          <h3 className={styles.title}>Minhas Rendas Fixas</h3>
        </div>
        <div className={styles.containerfilters}>
          <Select options={["opções", "opção 1", "opção 2"]} />
          <Input text={(e) => setSearchTerm(e)} />
        </div>
      </div>
      {searchTerm
        ? fixedIncomeData &&
          fixedIncomeData
            .filter((obj) => {
              if (
                obj.fixedIncome.name
                  .toLowerCase()
                  .indexOf(searchTerm.toLowerCase()) > -1
              )
                return true;
            })
            .map(
              (data, index) =>
                index >= firstIndex &&
                index <= lastIndex && (
                  <FixedIncomeItem
                    key={uuidv4()}
                    due={data.due}
                    fixedIncome={data.fixedIncome}
                    position={data.position}
                    backgroudLightGray={(index + 1) % 2 === 0}
                  />
                )
            )
        : fixedIncomeData &&
          fixedIncomeData.map(
            (data, index) =>
              index >= firstIndex &&
              index <= lastIndex && (
                <FixedIncomeItem
                  key={uuidv4()}
                  due={data.due}
                  fixedIncome={data.fixedIncome}
                  position={data.position}
                  backgroudLightGray={(index + 1) % 2 === 0}
                />
              )
          )}
    </div>
  );
};

export default MyFixedIncome;
