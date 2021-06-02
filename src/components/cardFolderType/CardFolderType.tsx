import { currencyFormatterWithoutPrefix } from '@utils/currencyHelper';
import React, { useEffect, useState } from 'react';
import { Content, Header, ContentBody, ContentField, Name, Value, TitleName } from './CardFolderTypes.styles';

interface CardFolderProps {
  title: string;
  data: { [key: string]: string | number };
}

const CardFolderType = (props: CardFolderProps) => {
  const { title, data } = props;

  return (
    <Content>
      <Header>
        <p>{title}</p>
      </Header>
      <ContentBody>
        {/* TODO: Isso poderia ser um loop com mas devido ao tempo corrido ainda tenho que refatorar */}
        {data?.name && <ContentField><TitleName>{data.name}</TitleName></ContentField>}
        {data?.bondType && <ContentField><Name>CLASSE</Name><Value type="class">{data.bondType}</Value></ContentField>}
        {data?.valueApplied && <ContentField><Name>VALOR INVES.</Name><Value type="position">{currencyFormatterWithoutPrefix(data.valueApplied)}</Value></ContentField>}
        {data?.equity && <ContentField><Name>SALDO BRUTO</Name><Value type="position">{currencyFormatterWithoutPrefix(data.equity)}</Value></ContentField>}
        {data?.profitability && <ContentField><Name>RENT.</Name><Value type="position">{data.profitability}%</Value></ContentField>}
        {data?.portfolioPercentage && <ContentField><Name>% DA CART.</Name><Value type="position">{data.portfolioPercentage}%</Value></ContentField>}
        {data?.indexerValue && <ContentField><Name>CDI</Name><Value type="position">{data.indexerValue}</Value></ContentField>}
        {data?.percentageOverIndexer && <ContentField><Name>SOBRE CDI</Name><Value type="position">{data.percentageOverIndexer}</Value></ContentField>}
        {data?.date && <ContentField><Name>DATA VENC.</Name><Value type="dueDate">{data.date}</Value></ContentField>}
        {data?.daysUntilExpiration && <ContentField><Name>DIAS ATÉ VENC</Name><Value type="dueDate">{data.daysUntilExpiration}</Value></ContentField>}
      </ContentBody>
    </Content>
  );
};

export default CardFolderType;
