import React, { useContext } from "react";

import FormsFixedIncome from "../FormsFixedIncome";
import MyFixedIncomeCards from "../MyFixedIncomeCards";
import { FixedIncomeContext } from "../../context/FixedIncome";

import * as S from "./styles";

const MyFixedIncome = () => {
  const { myFixedIncomeProducts, selectedText } = useContext(
    FixedIncomeContext
  );

  const filterMyFixedIncome = (props) => {
    return selectedText === ""
      ? props
      : props.fixedIncome.bondType
          .toLowerCase()
          .includes(selectedText.toLowerCase()) ||
          props.fixedIncome.name
            .toLowerCase()
            .includes(selectedText.toLowerCase());
  };

  return (
    <S.Container>
      <S.MyFixedIncomeContainer>
        <S.Title>Minhas Rendas Fixas</S.Title>
        <FormsFixedIncome />
      </S.MyFixedIncomeContainer>

      {myFixedIncomeProducts?.filter(filterMyFixedIncome).map((props) => (
        <MyFixedIncomeCards
          props={props}
          key={props.fixedIncome.portfolioProductId}
        />
      ))}
    </S.Container>
  );
};

export default MyFixedIncome;
