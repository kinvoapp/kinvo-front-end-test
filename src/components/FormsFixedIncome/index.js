import * as S from "./styles";

import IconSearch from "../../assets/search.svg";

const FormsFixedIncome = () => {
  return (
    <S.FormContainer>
      <S.SelectFormContainer>
        <S.SelectedForm>
          <S.Option>Ordenar por</S.Option>
        </S.SelectedForm>
      </S.SelectFormContainer>

      <S.InputTextContainer>
        <S.InputText />
        <S.ButtonSearch>
          <img src={IconSearch} alt="icone search" />
        </S.ButtonSearch>
      </S.InputTextContainer>
    </S.FormContainer>
  );
};

export default FormsFixedIncome;
