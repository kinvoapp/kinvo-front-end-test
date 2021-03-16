import {
  SingleOptionContainer,
  SingleOptionIcon,
  SingleOptionTextContainer,
  SingleOptionTitle,
  SingleOptionValue,
} from './style';
import { SnapshotPortfolio } from '../../ducks/inovice';

const BalanceSrc = '/images/balance.svg';
const AppliedAmountSrc = '/images/appliedAmount.svg';
const ProfitabilitySrc = '/images/profitability.svg';
const ArrowDownSrc = '/images/arrowDown.svg';

export default function GroupedSingleOption(props: {
  show: boolean;
  portfolio: SnapshotPortfolio;
}) {
  const { show, portfolio } = props;
  return (
    <>
      <SingleOption
        title={'Saldo Bruto'}
        value={portfolio?.equity.toString()}
        iconSrc={BalanceSrc}
        show={show}
      />
      <SingleOption
        title={'Valor Aplicado'}
        value={portfolio?.equityProfit.toString()}
        iconSrc={AppliedAmountSrc}
        show={show}
      />
      <SingleOption
        title={'Rentabilidade'}
        value={portfolio?.indexerValue.toString()}
        iconSrc={ProfitabilitySrc}
        show={show}
      />
      <SingleOption
        title={'Carteira'}
        value={'Minha Carteira'}
        iconSrc={ArrowDownSrc}
        show={show}
      />
    </>
  );
}

const SingleOption = (props: {
  iconSrc: string;
  title: string;
  value: string;
  show: boolean;
}) => {
  const { iconSrc, title, value, show } = props;

  return (
    <SingleOptionContainer show={show}>
      <SingleOptionIcon src={iconSrc} />
      <SingleOptionTextContainer>
        <SingleOptionTitle>{title}</SingleOptionTitle>
        <SingleOptionValue>{value}</SingleOptionValue>
      </SingleOptionTextContainer>
    </SingleOptionContainer>
  );
};
