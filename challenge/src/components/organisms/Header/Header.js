import * as S from 'components/styled/lib';
import HeaderCard from 'components/atoms/Header/HeaderCard';
import Loading from 'components/atoms/Loading';
import getCurency from 'helpers/getCurrency';

const titleDictionary = {
  equity: {
    title: 'Saldo Bruto',
    value: getCurency('BRL'),
  },
  equityProfit: {
    title: 'Resultado',
    value: getCurency('BRL'),
  },
  indexerValue: {
    title: 'CDI',
    value: (value) => `${value}%`,
  },
  percentageOverIndexer: {
    title: '% Sobre Cdi',
    value: (value) => `${value}%`,
  },
  percentageProfit: {
    title: 'Rentabilidade',
    value: (value) => `${value}%`,
  },
  valueApplied: {
    title: 'Valor Aplicado',
    value: getCurency('BRL'),
  },
};

function generateCards(data) {
  const isolatedPropertiesArray = Object.entries(data);
  return isolatedPropertiesArray.map((property) => (
    <HeaderCard
      title={titleDictionary[property[0]]?.title}
      text={titleDictionary[property[0]]?.value(property[1])}
    />
  ));
}
const Header = ({ title, cardsData, loading }) => {
  return (
    <S.PageHeader>
      <S.Title size="20" color="violet" weight="bold">
        {title}
      </S.Title>
      {loading ? (
        <Loading />
      ) : (
        <S.HeaderCardWrapper>{cardsData && generateCards(cardsData)}</S.HeaderCardWrapper>
      )}
    </S.PageHeader>
  );
};

export default Header;
