import * as S from 'components/styled/lib';
import FixedIncomeHeaderCard from 'components/FixedIncomeHeaderCard/FixedIncomeHeaderCard';
import { titleDictionary } from 'helpers/dictionaryPool';

function generateCards(data) {
  const isolatedPropertiesArray = Object.entries(data);
  return isolatedPropertiesArray.map((entry, index) => (
    <FixedIncomeHeaderCard
      key={index}
      title={titleDictionary[entry[0]]?.title}
      text={titleDictionary[entry[0]]?.value(entry[1])}
    />
  ));
}

const FixedIncomeHeader = ({ title, cardsData }) => {
  return (
    <S.Header>
      <S.Title size="20" color="violet" weight="bold">
        {title}
      </S.Title>
      <S.HeaderCardWrapper>{cardsData && generateCards(cardsData)}</S.HeaderCardWrapper>
    </S.Header>
  );
};

export default FixedIncomeHeader;
