import * as S from 'components/styled/lib';
import { ReactComponent as LogoSvg } from 'assets/images/logo.svg';
import KinvoPremiumHeaderInfoItem from './KinvoPremiumHeaderInfoItem/KinvoPremiumHeaderInfoItem';
import { titleDictionary } from 'helpers/dictionaryPool';
import { useEffect, useState } from 'react';
import api from 'services/api';

const AppHeader = () => {
  const [portfolioInfo, setPortifolioInfo] = useState({});

  useEffect(() => {
    api
      .getFixedIncome()
      .then(({ data: { snapshotByPortfolio: { equity, valueApplied, percentageProfit } } }) =>
        setPortifolioInfo({ equity, valueApplied, percentageProfit }),
      )
      .catch((error) => console.error(error));
  }, [setPortifolioInfo]);

  return (
    <S.KinvoPremiumHeader>
      <LogoSvg />
      <S.KinvoPremiumHeaderInfo>
        {Object.entries(portfolioInfo).map((info) => (
          <KinvoPremiumHeaderInfoItem
            key={info[0]}
            name={info[0]}
            title={titleDictionary[info[0]]?.title}
            text={titleDictionary[info[0]].value(info[1])}
          />
        ))}
        <KinvoPremiumHeaderInfoItem name="carteira" title="carteira" text="Minha Carteira" />
        <KinvoPremiumHeaderInfoItem name="hamburguer" />
      </S.KinvoPremiumHeaderInfo>
    </S.KinvoPremiumHeader>
  );
};

export default AppHeader;
