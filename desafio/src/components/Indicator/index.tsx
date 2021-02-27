import React from 'react';

import { parseCurrency, parsePercentage } from '../../utils';
import { Container, Content, Title, Value } from './styles';

interface IndicatorProps {
  title: string;
  value: number;
  percentage?: boolean;
}

export const Indicator: React.FC<IndicatorProps> = ({
  title,
  value,
  percentage
}) => {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>

        <Value>
          {percentage ? parsePercentage(value) : parseCurrency(value)}
        </Value>
      </Content>
    </Container>
  );
};
