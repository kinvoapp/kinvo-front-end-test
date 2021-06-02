import { useState } from "react";

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

export function MyFixedIncomes({ data }) {
  const [page, setPage] = useState(1);
  const [initialPosition, setInitialPosition] = useState(0);
  const limitPerPage = 5;

  const pagesQtd = Math.ceil(data.length / limitPerPage);
  const dataLength = page * limitPerPage;

  const pagesNumbersForRender = new Array(pagesQtd).fill(0).map((item, index) => index + 1);

  function handleChangePagination(pageNumber) {
    setPage(pageNumber);

    if (pageNumber > page) {
      setInitialPosition((state) => state + 6);
    } else {
      setInitialPosition((state) => state - 6);
    }
  }

  return (
    <MyFixedIncomesContainer>
      <MyFixedIncomesHeader>
        <h1>Minhas Rendas Fixas</h1>
        <div>
          <SelectInput />
          <Input icon={SearchIcon} />
        </div>
      </MyFixedIncomesHeader>
      <MyFixedIncomesBody>
        {data.map((income, index) => {
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
