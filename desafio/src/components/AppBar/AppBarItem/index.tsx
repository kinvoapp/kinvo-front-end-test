import React from 'react';

import { Container, Icon, Content, Title, Value } from './styles';

interface AppBarItemProps {
  title: string;
  value: string;
  icon: string;
}

export const AppBarItem: React.FC<AppBarItemProps> = ({
  icon,
  title,
  value
}) => {
  return (
    <Container>
      <Icon src={icon} />

      <Content>
        <Title>{title}</Title>
        <Value>{value}</Value>
      </Content>
    </Container>
  );
};
