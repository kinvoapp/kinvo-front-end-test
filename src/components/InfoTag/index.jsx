import React from 'react';
import { Container, Title, Subtitle } from './styles';
import Card from '../Card';

function InfoTag(props) {
  const { title, subtitle, prefix, sufix } = props;
  return (
    <Card>
      <Container>
        <Title>{title}</Title>
        <Subtitle>{prefix} {subtitle?.toLocaleString()} {sufix}</Subtitle>
      </Container>
    </Card>
  )
}

export default InfoTag;