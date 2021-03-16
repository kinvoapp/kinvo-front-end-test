import { Container } from './style';
import Block from './block';
import { SnapshotPortfolio } from '../../ducks/inovice';
import { formatCurrency } from '../../utility/config';

export default function Blocks(props: { portfolio: SnapshotPortfolio }) {
  const { portfolio } = props;

  return (
    <Container>
      <Block
        title={'Saldo Bruto'}
        value={`R$ ${formatCurrency(portfolio?.equity)}`}
      />
      <Block
        title={'Valor Aplicado'}
        value={`R$ ${formatCurrency(portfolio?.equityProfit)}`}
      />
      <Block
        title={'Resultado'}
        value={`R$ ${formatCurrency(portfolio?.indexerValue)}`}
      />
      <Block
        title={'Rentabilidade'}
        value={`${formatCurrency(portfolio?.percentageOverIndexer)}%`}
      />
      <Block
        title={'CDI'}
        value={`${formatCurrency(portfolio?.percentageProfit)}%`}
      />
      <Block
        title={'% Sobre Cdi'}
        value={`${formatCurrency(portfolio?.valueApplied)}%`}
      />
    </Container>
  );
}
