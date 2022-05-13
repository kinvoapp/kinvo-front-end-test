import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Select from "../layout/Select";
import Input from "../layout/Input";

import FixedIncomeItem from "./FixedIncomeItem";

import styles from "./MyFixedIncome.module.css";

const MyFixedIncome = ({ fixedIncomeData, currentPage }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataOrder, setDataOrder] = useState(fixedIncomeData);
  let nOfItemPerPage = 5;

  // changes the page elements depedin of wicht page we are
  const firstIndex = nOfItemPerPage * (currentPage - 1);
  const lastIndex = nOfItemPerPage * currentPage - 1;

  function bubleSort(option) {
    const newOrder = [...dataOrder];
    if (option === "Dias para venc.") {
      for (let i = 0; i < newOrder.length; i++) {
        for (let j = 0; j < newOrder.length - i - 1; j++) {
          if (
            newOrder[j].due.daysUntilExpiration >
            newOrder[j + 1].due.daysUntilExpiration
          ) {
            [newOrder[j], newOrder[j + 1]] = [newOrder[j + 1], newOrder[j]];
          }
        }
      }
    } else if (option === "Maior rent. - Menor rent") {
      for (let i = 0; i < newOrder.length; i++) {
        for (let j = 0; j < newOrder.length - i - 1; j++) {
          if (
            newOrder[j].position.profitability <
            newOrder[j + 1].position.profitability
          ) {
            [newOrder[j], newOrder[j + 1]] = [newOrder[j + 1], newOrder[j]];
          }
        }
      }
    } else if (option === "Maior valor inves. - Menor valor inves.") {
      for (let i = 0; i < newOrder.length; i++) {
        for (let j = 0; j < newOrder.length - i - 1; j++) {
          if (
            newOrder[j].position.valueApplied <
            newOrder[j + 1].position.valueApplied
          ) {
            [newOrder[j], newOrder[j + 1]] = [newOrder[j + 1], newOrder[j]];
          }
        }
      }
    }

    setDataOrder(newOrder);
  }

  return (
    <div className={styles.containerfixedincome}>
      <div className={styles.fidexincomeheader}>
        <div>
          <h3 className={styles.title}>Minhas Rendas Fixas</h3>
        </div>
        <div className={styles.containerfilters}>
          <Select sortBy={(e) => bubleSort(e)} />
          <Input text={(e) => setSearchTerm(e)} />
        </div>
      </div>
      {searchTerm
        ? dataOrder &&
          dataOrder
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
        : dataOrder &&
          dataOrder.map(
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
