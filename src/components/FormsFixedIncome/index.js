import { useContext } from "react";
import { FixedIncomeContext } from "../../context/FixedIncome";

import IconSearch from "../../assets/search.svg";

import * as S from "./styles";

const FormsFixedIncome = () => {
  const { selectedText, setSelectedText } = useContext(FixedIncomeContext);

  return (
    <S.FormContainer>
      <S.SelectFormContainer>
        <S.SelectedForm>
          <S.Option>Ordenar por</S.Option>
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
