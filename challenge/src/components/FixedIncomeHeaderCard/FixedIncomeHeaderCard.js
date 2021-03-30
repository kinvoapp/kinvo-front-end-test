import * as S from '../styled/lib';

const FixedIncomeHeaderCard = ({ title, text }) => {
  return (
    <S.HeaderCard>
      <S.Content>
        <S.Title
          as="h4"
          size="9"
          color="neutral-dark"
          weight="500"
          transform="uppercase"
          letterSpacing="0.45"
          margin="0.3rem 0"
        >
          {title}
        </S.Title>
        <S.Text size="14" color="violet" weight="bold">
          {text}
        </S.Text>
      </S.Content>
    </S.HeaderCard>
  );
};

export default FixedIncomeHeaderCard;
