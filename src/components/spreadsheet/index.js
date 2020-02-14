import React from 'react';

import Table from '../tabela/index';

import { Container, Title, Sublabel, Truelabel, Card, Card2 } from './styles';

export default function spreadsheet() {
  return (
    <>
      <Container>
        <div>
          <Title>Análise por Classe de Ativos</Title>
          <div
            style={{ display: 'flex', flexDirection: 'row', maxWidth: 1120 }}
          >
            <Card>
              <Sublabel>Ações</Sublabel>
            </Card>
            <Card2>
              <Truelabel>Nome da Classe</Truelabel>
            </Card2>
            <Card2>
              <Truelabel>Nome da Classe</Truelabel>
            </Card2>
            <Card2>
              <Truelabel>Nome da Classe</Truelabel>
            </Card2>
          </div>
          <Table />
        </div>
      </Container>
    </>
  );
}
