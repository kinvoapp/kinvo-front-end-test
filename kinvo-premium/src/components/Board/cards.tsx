import {
  CardContainer,
  CardTitle,
  CardContent,
  TextLeft,
  ContentRight,
  TextRight,
} from './style';
import { formatCurrency } from '../../utility/config';

export function Card(props: { income: { bondType: string; name: string } }) {
  return (
    <CardContainer width={22.6}>
      <CardTitle>Título</CardTitle>
      <CardContent>
        <TextLeft>{props.income.name}</TextLeft>
        <ContentRight>
          <CardTitle>Classe</CardTitle>
          <TextRight color={'var(--little-purple)'}>
            {props.income.bondType}
          </TextRight>
        </ContentRight>
      </CardContent>
    </CardContainer>
  );
}

export function Result(props: {
  position: {
    equity: number;
    indexerLabel: string;
    indexerValue: number;
    percentageOverIndexer: number;
    portfolioPercentage: number;
    profitability: number;
    valueApplied: number;
  };
}) {
  return (
    <CardContainer width={50.2}>
      <CardTitle>Resultado</CardTitle>
      <CardContent>
        <ContentRight>
          <CardTitle>Valor Inves.</CardTitle>
          <TextRight color={'var(--green)'}>
            {formatCurrency(props.position.valueApplied)}
          </TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>Saldo Bruto</CardTitle>
          <TextRight color={'var(--green)'}>
            {formatCurrency(props.position.equity)}
          </TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>Rent.</CardTitle>
          <TextRight
            color={'var(--green)'}
          >{`${props.position.profitability}%`}</TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>% da cart.</CardTitle>
          <TextRight
            color={'var(--green)'}
          >{`${props.position.portfolioPercentage}%`}</TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>cdi</CardTitle>
          <TextRight color={'var(--green)'}>
            {formatCurrency(props.position.indexerValue)}
          </TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>sobre cdi</CardTitle>
          <TextRight color={'var(--green)'}>
            {formatCurrency(props.position.percentageOverIndexer)}
          </TextRight>
        </ContentRight>
      </CardContent>
    </CardContainer>
  );
}

export function DueDate(props: {
  due: { date: string; daysUntilExpiration: number };
}) {
  return (
    <CardContainer width={20}>
      <CardTitle>Vencimento</CardTitle>
      <CardContent>
        <ContentRight>
          <CardTitle>data venc.</CardTitle>
          <TextRight color={'var(--blue)'}>{props.due.date}</TextRight>
        </ContentRight>
        <ContentRight>
          <CardTitle>dias até venc.</CardTitle>
          <TextRight color={'var(--blue)'}>
            {props.due.daysUntilExpiration}
          </TextRight>
        </ContentRight>
      </CardContent>
    </CardContainer>
  );
}
