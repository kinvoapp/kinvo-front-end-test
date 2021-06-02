import {
  MyFixedIncomesContainer,
  MyFixedIncomesHeader,
  MyFixedIncomesBody,
  MyFixedIncomesRow,
  FilterInputContainer,
  FilterSelectContainer,
} from "./styles";
import { FixedIncomeTitleCard } from "./FixedIncomeTitleCard";
import { FixedIncomePostionCard } from "./FixedIncomePositionCard";
import { FixedIncomeDueDateCard } from "./FixedIncomeDueDateCard";

import { SelectInput } from "../Inputs/SelectInput";
import { Input } from "../Inputs/SearchInput";
import SearchIcon from "../../assets/icons/search.svg";

export function MyFixedIncomes({ data }) {
  console.log("data", data);
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
        {data.map((income) => {
          return (
            <MyFixedIncomesRow key={income.fixedIncome.portfolioProductId}>
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
          );
        })}
      </MyFixedIncomesBody>
    </MyFixedIncomesContainer>
  );
}
