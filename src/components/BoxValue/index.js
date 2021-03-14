import * as S from "./styles";

const BoxValue = ({ title, value, number = false, percent = false }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Number>
        {number && "R$ "}
        {value}
        {percent && "%"}
      </S.Number>
    </S.Container>
  );
};

export default BoxValue;
