import * as S from 'components/styled/lib';
import { ReactComponent as InfoSvg } from 'assets/images/info.svg';
import FixedIncomeCell from 'components/atoms/FixedIncome/FixedIncomeCell';

const FixedIncomeCard = ({ title, text, cellColor, cells }) => {
  return (
    <S.FixedIncomeCard>
      <S.FixedIncomeCardHeader>
        <S.Title
          size="9"
          color="neutral-dark"
          transform="uppercase"
          weight="500"
          letterSpacing="0.45"
        >
          {title}
        </S.Title>
        <InfoSvg />
      </S.FixedIncomeCardHeader>
      <S.FixedIncomeCardContent>
        {text && (
          <S.FixedIncomeCardText>
            <S.Text size="12" color="neutral-dark" weight="500" lineHeight="1.6">
              {text}
            </S.Text>
          </S.FixedIncomeCardText>
        )}
        <FixedIncomeCell title="Classe" color="violet-light" value="Tesouro Direto" />
      </S.FixedIncomeCardContent>
    </S.FixedIncomeCard>
  );
};

export default FixedIncomeCard;
