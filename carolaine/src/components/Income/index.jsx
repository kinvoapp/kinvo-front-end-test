import React from "react";
import {
  RendaContainer,
  Item,
  Title,
  Columns,
  Texto,
  ClassLabel,
  Class,
} from "./style";
import { AiOutlineInfoCircle as InfoIcon } from "react-icons/ai";

const Income = ({ data }) => {
  const className = data.fixedIncome.bondType;
  const title = data.fixedIncome.name;
  const dueDate = data.due.date;
  const daysExpiration = data.due.daysUntilExpiration;
  const valueApplied = data.position.valueApplied.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  const equity = data.position.equity.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
  const percentagePortfolio = data.position.portfolioPercentage;
  const indexerValue = data.position.indexerValue;
  const percentageOverIndexer = data.position.percentageOverIndexer;
  const profitability = data.position.profitability;

  console.log(data);

  return (
    <RendaContainer>
      <Item $mode="title">
        <Title>
          <span>Título</span>
          <InfoIcon />
        </Title>
        <Columns $mode="two-columns" altMode>
          <Texto>{title}</Texto>
          <div>
            <ClassLabel>Classe</ClassLabel>
            <Class $mode="title">{className}</Class>
          </div>
        </Columns>
      </Item>

      <Item $mode="position">
        <Title>
          <span>Minha Posição</span>
          <InfoIcon />
        </Title>
        <Columns $mode="six-columns">
          <div>
            <ClassLabel>Valor Inves.</ClassLabel>
            <Class $mode="position">{valueApplied}</Class>
          </div>

          <div>
            <ClassLabel>Saldo Bruto</ClassLabel>
            <Class $mode="position">{equity}</Class>
          </div>

          <div>
            <ClassLabel>Rent.</ClassLabel>
            <Class $mode="position">{profitability}%</Class>
          </div>

          <div>
            <ClassLabel>% da Cart.</ClassLabel>
            <Class $mode="position">{percentagePortfolio}%</Class>
          </div>

          <div>
            <ClassLabel>CDI</ClassLabel>
            <Class $mode="position">{indexerValue}%</Class>
          </div>

          <div>
            <ClassLabel>Sobre CDI</ClassLabel>
            <Class $mode="position">{percentageOverIndexer}%</Class>
          </div>
        </Columns>
      </Item>

      <Item $mode="due">
        <Title>
          <span>Vencimento</span>
          <InfoIcon />
        </Title>
        <Columns $mode="two-columns">
          <div>
            <ClassLabel>Data venc.</ClassLabel>
            <Class $mode="due">{dueDate}</Class>
          </div>

          <div>
            <ClassLabel>Dias até venc.</ClassLabel>
            <Class $mode="due">{daysExpiration}</Class>
          </div>
        </Columns>
      </Item>
    </RendaContainer>
  );
};

export default Income;
