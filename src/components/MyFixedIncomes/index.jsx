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

const data = {
  equity: 1521.65,
  indexerLabel: "CDI",
  indexerValue: 0.4,
  percentageOverIndexer: 357.1,
  portfolioPercentage: 0.28,
  profitability: 1.44,
  valueApplied: 1500,
};

export function MyFixedIncomes() {
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
        <MyFixedIncomesRow>
          <FixedIncomeTitleCard
            incomeClass="Tesouro Direto"
            description="Tesouro IPCA + com juros semestrais 2020(ntnb)"
          />
          <FixedIncomePostionCard data={data} />
          <FixedIncomeDueDateCard daysUntilExpiration={5762} date="15.05.2019" />
        </MyFixedIncomesRow>
        <MyFixedIncomesRow>
          <FixedIncomeTitleCard
            incomeClass="Tesouro Direto"
            description="Tesouro IPCA + com juros semestrais 2020(ntnb)"
          />
          <FixedIncomePostionCard data={data} />
          <FixedIncomeDueDateCard daysUntilExpiration={5762} date="15.05.2019" />
        </MyFixedIncomesRow>
        <MyFixedIncomesRow>
          <FixedIncomeTitleCard
            incomeClass="Tesouro Direto"
            description="Tesouro IPCA + com juros semestrais 2020(ntnb)"
          />
          <FixedIncomePostionCard data={data} />
          <FixedIncomeDueDateCard daysUntilExpiration={5762} date="15.05.2019" />
        </MyFixedIncomesRow>
        <MyFixedIncomesRow>
          <FixedIncomeTitleCard
            incomeClass="Tesouro Direto"
            description="Tesouro IPCA + com juros semestrais 2020(ntnb)"
          />
          <FixedIncomePostionCard data={data} />
          <FixedIncomeDueDateCard daysUntilExpiration={5762} date="15.05.2019" />
        </MyFixedIncomesRow>
        <MyFixedIncomesRow>
          <FixedIncomeTitleCard
            incomeClass="Tesouro Direto"
            description="Tesouro IPCA + com juros semestrais 2020(ntnb)"
          />
          <FixedIncomePostionCard data={data} />
          <FixedIncomeDueDateCard daysUntilExpiration={5762} date="15.05.2019" />
        </MyFixedIncomesRow>
      </MyFixedIncomesBody>
    </MyFixedIncomesContainer>
  );
}
