import React from 'react';
import { Container, Tag, Body } from './styles';

function IncomeCard(props) {
  const { title, children } = props;
  return (
    <Container>
      <Tag>{title}</Tag>
      <Body>
        {children}
      </Body>
    </Container>
  )
}

export default IncomeCard;