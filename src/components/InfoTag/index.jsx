import React from 'react';
import { Container, Title, Subtitle } from './styles';
import Card from '../Card';

function InfoTag(props) {
  const { title, subtitle } = props;
  return (
    <Card>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Container>
    </Card>
  )
}

export default InfoTag;