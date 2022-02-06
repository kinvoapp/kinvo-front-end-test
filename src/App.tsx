import React, { useEffect, useState } from 'react';
import './App.css';
import { CardContainer, ContainerTop, FixedIncomeDetails, InputxBox } from './AppStyles';
import { GeneralBody } from './components/GeneralBody';
import Header from './components/Header';
import SnapshotPortfolioStats from './components/PortifolioStatsCard';
import SnapshotProductStats from './components/ProductStatsCard';
import { ProductStatsCard } from './components/ProductStatsCard/styles';
import TitleMain from './components/TitleMain';
import { IResponseData } from './interfaces/apiResponse';
import api from './services/api';
import { formatToCurrency } from './utils/formatToCurrency';




function App() {

  const [fixedIncomeData, setFixedIncomeData] = useState<IResponseData>({} as IResponseData);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api.get('/getFixedIncomeClassData').then((response) => {
      const responseFixedIncome = response.data;
      setFixedIncomeData(responseFixedIncome.data);
      setLoading(false)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <GeneralBody>
        <>
          <TitleMain
            text='Renda Fixa'
            color='#4C309B'
            fontWeight={800}
          />

          {isLoading ? <p>Carregando...</p> : (
            <CardContainer>
              <SnapshotPortfolioStats
                title='saldo bruto'
                content={
                  `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.equity)}`
                }
              />
              <SnapshotPortfolioStats
                title='valor aplicado'
                content={
                  `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.valueApplied)}`
                }
              />
              <SnapshotPortfolioStats
                title='resultado'
                content={
                  `${formatToCurrency(fixedIncomeData.snapshotByPortfolio.equityProfit)}`
                }
              />
              <SnapshotPortfolioStats
                title='rentabilidade'
                content={
                  `${fixedIncomeData.snapshotByPortfolio.percentageProfit}%`
                }
              />
              <SnapshotPortfolioStats
                title='cdi'
                content={
                  `${fixedIncomeData.snapshotByPortfolio.indexerValue}%`
                }
              />
              <SnapshotPortfolioStats
                title='% sobre cdi'
                content={
                  `${fixedIncomeData.snapshotByPortfolio.percentageOverIndexer}%`
                }
              />
            </CardContainer>
          )}
        </>
        <FixedIncomeDetails>
          <ContainerTop>
            <TitleMain
              text='Minhas Rendas Fixas'
              color='#627179'
            />
            <InputxBox>
              <input type="text" />
              <input type="select" />
            </InputxBox>
          </ContainerTop>
          <hr />
          <div className='card_conatiner'>
            {isLoading ? <p>Carregando...</p> : (
              <>
                <SnapshotProductStats
                  title='Título'
                  dataFixed={fixedIncomeData.snapshotByProduct[0].fixedIncome}
                />
                <SnapshotProductStats
                  title='Minha Posição'
                  dataPosition={fixedIncomeData.snapshotByProduct[0].position}
                />
                <SnapshotProductStats
                  title='Vencimento'
                  dataDue={fixedIncomeData.snapshotByProduct[0].due}
                />
              </>
            )}

          </div>
        </FixedIncomeDetails>
      </GeneralBody>
    </div>
  );
}

export default App;
