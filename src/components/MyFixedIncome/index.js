import React, { useContext } from "react";
import FormsFixedIncome from "../FormsFixedIncome";
import MyFixedIncomeCards from "../MyFixedIncomeCards";
import { FixedIncomeContext } from "../../context/FixedIncome";

import * as S from "./styles";

const MyFixedIncome = () => {
  const { myFixedIncomeProducts } = useContext(FixedIncomeContext);

  return (
    <S.Container>
      <S.MyFixedIncomeContainer>
        <S.Title>Minhas Rendas Fixas</S.Title>
        <FormsFixedIncome />
      </S.MyFixedIncomeContainer>

      {myFixedIncomeProducts &&
        myFixedIncomeProducts.map((props) => (
          <MyFixedIncomeCards
            props={props}
            key={props.fixedIncome.portfolioProductId}
          />
        ))}
    </S.Container>
  );
};

export default MyFixedIncome;
