import { formatedDate, formatedNumber } from "../../helpers";

import Loading from "../../components/Loading";

import * as S from "./styles";

const MyFixedIncomeCards = ({ props }) => {
  if (!props) return <Loading />;
  return (
    <S.Container>
      <S.Title>
        <S.TitleInfoContainer>
          <S.TitleInfo>título</S.TitleInfo>
          <S.SubTitleInfo>{props.fixedIncome.name}</S.SubTitleInfo>
        </S.TitleInfoContainer>

        <S.ClassContainer>
          <S.ClassItemText>classe</S.ClassItemText>
          <S.ClassItemType>{props.fixedIncome.bondType}</S.ClassItemType>
        </S.ClassContainer>
      </S.Title>
      <S.Position>
        <S.PositionTitle>resultado</S.PositionTitle>
        <S.PositionNumbersContainer>
          <S.PositionNumbers>
            <S.PositionNumberTitle>Valor inves.</S.PositionNumberTitle>
            <S.PositionNumber>
              {formatedNumber(props.position.valueApplied)}
            </S.PositionNumber>
          </S.PositionNumbers>

          <S.PositionNumbers>
            <S.PositionNumberTitle>Saldo bruto</S.PositionNumberTitle>
            <S.PositionNumber>
              {formatedNumber(props.position.equity)}
            </S.PositionNumber>
          </S.PositionNumbers>

          <S.PositionNumbers>
            <S.PositionNumberTitle>rent.</S.PositionNumberTitle>
            <S.PositionNumber>{props.position.profitability}%</S.PositionNumber>
          </S.PositionNumbers>

          <S.PositionNumbers>
            <S.PositionNumberTitle>% da cart.</S.PositionNumberTitle>
            <S.PositionNumber>
              {props.position.portfolioPercentage}%
            </S.PositionNumber>
          </S.PositionNumbers>

          <S.PositionNumbers>
            <S.PositionNumberTitle>cdi</S.PositionNumberTitle>
            <S.PositionNumber>{props.position.indexerValue}</S.PositionNumber>
          </S.PositionNumbers>

          <S.PositionNumbers>
            <S.PositionNumberTitle>Sobre cdi</S.PositionNumberTitle>
            <S.PositionNumber>
              {props.position.percentageOverIndexer}
            </S.PositionNumber>
          </S.PositionNumbers>
        </S.PositionNumbersContainer>
      </S.Position>
      <S.DueDate>
        <S.DueDateTitle>Vencimento</S.DueDateTitle>
        <S.DueDateNumbersContainer>
          <S.DueDateNumbers>
            <S.DueDataTitle>Data venc.</S.DueDataTitle>
            <S.DueDataNumber>{formatedDate(props.due.date)}</S.DueDataNumber>
          </S.DueDateNumbers>

          <S.DueDateNumbers>
            <S.DueDataTitle>Dias até venc.</S.DueDataTitle>
            <S.DueDataNumber>{props.due.daysUntilExpiration}</S.DueDataNumber>
          </S.DueDateNumbers>
        </S.DueDateNumbersContainer>
      </S.DueDate>
    </S.Container>
  );
};

export default MyFixedIncomeCards;
