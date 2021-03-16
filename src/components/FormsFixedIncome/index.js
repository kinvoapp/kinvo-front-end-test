import { useContext } from "react";
import { FixedIncomeContext } from "../../context/FixedIncome";

import IconSearch from "../../assets/search.svg";
import * as S from "./styles";

const FormsFixedIncome = () => {
  const {
    selectedText,
    selectedDrop,
    setSelectedText,
    setSelectedDrop,
  } = useContext(FixedIncomeContext);

  return (
    <S.FormContainer>
      <S.SelectFormContainer>
        <S.SelectedForm
          value={selectedDrop}
          onChange={(event) => setSelectedDrop(event.target.value)}
        >
          <S.Option value="" disabled>
            Ordenar por
          </S.Option>
          <S.Option value="valueApplied">Valor Inves.</S.Option>
          <S.Option value="equity">Saldo Bruto</S.Option>
          <S.Option value="profitability">Rent.</S.Option>
        </S.SelectedForm>
      </S.SelectFormContainer>

      <S.InputTextContainer>
        <S.InputText
          value={selectedText}
          onChange={(e) => setSelectedText(e.target.value)}
        />
        <S.ButtonSearch>
          <img src={IconSearch} alt="icone search" />
        </S.ButtonSearch>
      </S.InputTextContainer>
    </S.FormContainer>
  );
};

export default FormsFixedIncome;
