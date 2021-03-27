import React from 'react';
import { Container, Tag, Body, Title } from './styles';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function IncomeCard(props) {
  const { title, children } = props;
  return (
    <Container>
      <Tag>
        <Title>{title}</Title>
        <AiOutlineInfoCircle />
      </Tag>
      <Body>
        {children}
      </Body>
    </Container>
  )
}

export default IncomeCard;