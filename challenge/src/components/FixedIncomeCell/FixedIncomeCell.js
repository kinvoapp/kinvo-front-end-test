import * as S from 'components/styled/lib';

const FixedIncomeCell = ({ color, title, value }) => {
  return (
    <S.FixedIncomeCardCell>
      <S.Title
        as="h4"
        size="9"
        color="neutral-dark"
        weight="500"
        transform="uppercase"
        letterSpacing="0.45"
      >
        {title}
      </S.Title>
      <S.Text size="14" color={color} weight="500" lineHeight="1.6">
        {value}
      </S.Text>
    </S.FixedIncomeCardCell>
  );
};

export default FixedIncomeCell;
