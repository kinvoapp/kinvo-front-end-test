import React from 'react';
import { Container, CardHeader, CardTitle, CardBody } from './styles';
import Card from '../Card';

function CardInfo(props) {
  const { title, titleBorder, headerOptions, footerOptions, children } = props;
  return (
    <Card>
      <Container>
        <CardHeader border={titleBorder}>
          <CardTitle>{title}</CardTitle>
          {headerOptions}
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
        {footerOptions}
      </Container>
    </Card>
  )
}

export default CardInfo;