import React from 'react';
import { Container, CardHeader, CardTitle, CardBody, CardFooter } from './styles';
import Card from '../Card';

function CardInfo(props) {
  const { title, titleBorder, children, footer } = props;
  return (
    <Card>
      <Container>
        <CardHeader border={titleBorder}>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          {children}
        </CardBody>
        {/* <CardFooter border={titleBorder}>
          {footer}
        </CardFooter> */}
      </Container>
    </Card>
  )
}

export default CardInfo;