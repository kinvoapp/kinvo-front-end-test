import * as S from 'components/styled/lib';
import { fixedIncomeDictionary } from 'helpers/dictionaryPool';
import { ReactComponent as InfoSvg } from 'assets/images/info.svg';
import FixedIncomeCell from 'components/FixedIncome/FixedIncomeTable/FixedIncomeCard/FixedIncomeCell/FixedIncomeCell';

function generateCells(data, color) {
  const isolatedPropertiesArray = Object.entries(data);
  return isolatedPropertiesArray.map(
    (entry) =>
      fixedIncomeDictionary[entry[0]] && (
        <FixedIncomeCell
          key={entry[0]}
          title={fixedIncomeDictionary[entry[0]]?.title}
          color={color}
          value={fixedIncomeDictionary[entry[0]]?.value(entry[1])}
        />
      ),
  );
}

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
        {cells && generateCells(cells, cellColor)}
      </S.FixedIncomeCardContent>
    </S.FixedIncomeCard>
  );
};

export default FixedIncomeCard;
