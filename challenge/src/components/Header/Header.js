import * as S from 'components/styled/lib';
import HeaderCard from 'components/HeaderCard/HeaderCard';
import Loading from 'components/Loading/Loading';
import { titleDictionary } from 'helpers/dictionaryPool';

function generateCards(data) {
  const isolatedPropertiesArray = Object.entries(data);
  return isolatedPropertiesArray.map((entry, index) => (
    <HeaderCard
      key={index}
      title={titleDictionary[entry[0]]?.title}
      text={titleDictionary[entry[0]]?.value(entry[1])}
    />
  ));
}

const Header = ({ title, cardsData }) => {
  return (
    <S.Header>
      <S.Title size="20" color="violet" weight="bold">
        {title}
      </S.Title>
      <S.HeaderCardWrapper>{cardsData && generateCards(cardsData)}</S.HeaderCardWrapper>
    </S.Header>
  );
};

export default Header;
