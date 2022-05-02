import React from 'react';

import Container from './styles';

type InfoProps = { fixedIncome:{ name: string, bondType:string } };

function AssetsInfo(props: InfoProps) {
  const { fixedIncome: { name, bondType } } = props;
  return (
    <Container>
      <h3>Título</h3>
      <p>{name}</p>
      <h4>Classe</h4>
      <p>{ bondType }</p>
    </Container>
  );
}

export default AssetsInfo;
