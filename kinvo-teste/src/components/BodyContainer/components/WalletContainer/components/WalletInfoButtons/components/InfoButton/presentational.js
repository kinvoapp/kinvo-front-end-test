import React from 'react';

import { InfoButtonLabel, InfoButtonValue, Container } from './styles';

function InfoButton(props) {
  const { buttonName, value } = props;
  return (
    <Container>
      <InfoButtonLabel>{buttonName}</InfoButtonLabel>
      <InfoButtonValue>{value}</InfoButtonValue>
    </Container>
  );
}

export default InfoButton;
