import { useState, useEffect } from "react";

import {
  MyFixedIncomesContainer,
  MyFixedIncomesHeader,
  MyFixedIncomesBody,
  MyFixedIncomesRow,
} from "./styles";
import { FixedIncomeTitleCard } from "./FixedIncomeTitleCard";
import { FixedIncomePostionCard } from "./FixedIncomePositionCard";
import { FixedIncomeDueDateCard } from "./FixedIncomeDueDateCard";

import { SelectInput } from "../Inputs/SelectInput";
import { Input } from "../Inputs/SearchInput";
import SearchIcon from "../../assets/icons/search.svg";
import { Pagination } from "./Pagination";
import { validateFilterDate } from "../../utils/validateFilterData";

const filterOptions = [
  "Saldo Bruto",
  "Valor Investido",
  "Rentabilidade",
  "% da Cart.",
  "CDI",
  "Sobre CDI",
  "Data de Vencimento",
  "Dias até vencimento",
];

export function MyFixedIncomes({ data }) {
  const [fixedIncomeData, setFixedIncomeData] = useState([]);
  console.log(fixedIncomeData);

  const [page, setPage] = useState(1);
  const [initialPosition, setInitialPosition] = useState(0);
  const limitPerPage = 5;

  const pagesQtd = Math.ceil(fixedIncomeData.length / limitPerPage);
  const dataLength = page * limitPerPage;

  const pagesNumbersForRender = new Array(pagesQtd).fill(0).map((item, index) => index + 1);

  useEffect(() => {
    setFixedIncomeData(data);
  }, [data]);

  function handleChangePagination(pageNumber) {
    setPage(pageNumber);

    if (pageNumber > page) {
      setInitialPosition((state) => state + 6);
    } else {
      setInitialPosition((state) => state - 6);
    }
  }

  function handleChange(event) {
    setFixedIncomeData(data);

    const filteredData = validateFilterDate(data, event.target.value);

    setFixedIncomeData(filteredData);
  }

  return (
    <MyFixedIncomesContainer>
      <MyFixedIncomesHeader>
        <h1>Minhas Rendas Fixas</h1>
        <div>
          <SelectInput onChange={handleChange} options={filterOptions} />
          <Input icon={SearchIcon} />
        </div>
      </MyFixedIncomesHeader>
      <MyFixedIncomesBody>
        {fixedIncomeData.map((income, index) => {
          return (
            <div key={income.fixedIncome.portfolioProductId}>
              {index >= initialPosition - 1 && index < dataLength && (
                <MyFixedIncomesRow>
                  <FixedIncomeTitleCard
                    incomeClass={income.fixedIncome.bondType}
                    description={income.fixedIncome.name}
                  />
                  <FixedIncomePostionCard data={income.position} />
                  <FixedIncomeDueDateCard
                    daysUntilExpiration={income.due.daysUntilExpiration}
                    date={income.due.date}
                  />
                </MyFixedIncomesRow>
              )}
            </div>
          );
        })}
      </MyFixedIncomesBody>
      <Pagination
        handleChangePage={handleChangePagination}
        pages={pagesNumbersForRender}
        actualPage={page}
      />
    </MyFixedIncomesContainer>
  );
}
