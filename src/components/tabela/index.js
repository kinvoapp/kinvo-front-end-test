import React, { useState, useEffect } from 'react';
import Lupa from '../../assets/search';
import {
  Container,
  ProductName,
  Equity,
  Amount,
  AveragePrice,
  LastQuotation,
  CurrentMonthYield,
  LastTwelveMonthsYeld,
  Label,
  Card,
  Title,
  Price,
  Sheet,
  SearchBar,
  TitleSearch,
  Search
} from './styles';

export default function Table() {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://ed87c2a9-bcc4-4e0c-8fd2-fefb9875b65b.mock.pstmn.io/getStockConsolidation`
    )
      .then(response => response.json())
      .then(response => {
        setApiData(response);
        setLoading(false);
      });
  }, []);

  console.log(apiData);

  return (
    <Container>
      {loading ? null : (
        <div
          style={{
            backgroundColor: '#F8FAFB',
            width: '100%',
            maxWidth: '1120px'
          }}
        >
          <div
            style={{
              backgroundColor: '#F8FAFB',
              width: '100%',
              maxWidth: '1100px',
              display: 'flex',
              paddingTop: 10
            }}
          >
            <Card>
              <Title>SALDO BRUTO</Title>
              <Price>
                R${' '}
                {apiData.data.summary.grossBalance.toString().replace('.', ',')}
              </Price>
            </Card>

            <Card>
              <Title>VALOR APLICADO</Title>
              <Price>
                R${' '}
                {apiData.data.summary.appliedValue.toString().replace('.', ',')}
              </Price>
            </Card>
            <Card>
              <Title>GANHO DE CAPITAL</Title>
              <Price>
                R${' '}
                {apiData.data.summary.capitalGains.toString().replace('.', ',')}
              </Price>
            </Card>
            <Card>
              <Title>TOTAL DISTRIBUIDOS</Title>
              <Price>
                R$ {apiData.data.summary.earnings.toString().replace('.', ',')}
              </Price>
            </Card>
            <Card>
              <Title>YIELD</Title>
              <Price>{apiData.data.summary.yield}%</Price>
            </Card>
          </div>
          <div
            style={{
              backgroundColor: '#Fff',
              margin: 10,
              borderRadius: 10,
              width: '100%',
              maxWidth: '1100px',
              padding: 50
            }}
          >
            <SearchBar>
              <TitleSearch>Fundos</TitleSearch>
              <Search>
                <Lupa />{' '}
              </Search>
            </SearchBar>
            {apiData.data.products.map(p => {
              return (
                <div>
                  <div
                    style={{
                      flexDirection: 'row',
                      textAlign: 'center'
                    }}
                  >
                    <Sheet
                      style={{
                        borderBottom: 0.3,
                        borderBottomStyle: 'solid',
                        borderColor: '#CCCFD1'
                      }}
                    >
                      <ProductName
                        key={p.productName}
                        data={p}
                        style={{
                          borderLeft: 4,
                          borderLeftStyle: 'solid',
                          borderColor: '#4C309B',
                          height: 20,
                          textAlign: 'left'
                        }}
                      >
                        {p.productName}
                      </ProductName>
                      <div style={{}}>
                        <Label> SALDO ATUAL</Label>
                        <Equity>
                          R$ {p.equity.toString().replace('.', ',')}
                        </Equity>
                      </div>
                      <div>
                        <Label>QNTD.</Label>
                        <Amount>{p.amount} </Amount>
                      </div>
                      <div>
                        <Label>PREÇO MÉDIO</Label>
                        <AveragePrice>
                          R$ {p.averagePrice.toString().replace('.', ',')}
                        </AveragePrice>
                      </div>
                      <div>
                        <Label>úLTIMA COTAÇÃO</Label>
                        <LastQuotation>
                          R$ {p.lastQuotation.toString().replace('.', ',')}
                        </LastQuotation>
                      </div>
                      <div>
                        <Label>YIELD (1M)</Label>
                        <CurrentMonthYield>
                          {p.currentMonthYield.toString().replace('.', ',')}%
                        </CurrentMonthYield>
                      </div>
                      <div>
                        <Label>YIELD (12M)</Label>
                        <LastQuotation>
                          {p.lastTwelveMonthsYeld.toString().replace('.', ',')}%
                        </LastQuotation>
                      </div>
                      <div>
                        <Label>% CARTEIRA</Label>
                        <LastTwelveMonthsYeld>
                          {p.lastTwelveMonthsYeld.toString().replace('.', ',')}%
                        </LastTwelveMonthsYeld>
                      </div>
                    </Sheet>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </Container>
  );
}
