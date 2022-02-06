import React, { useEffect, useState } from 'react';
import './App.css';
import { CardContainer, ContainerTop, FixedIncomeDetails, InputxBox } from './AppStyles';
import { GeneralBody } from './components/GeneralBody';
import Header from './components/Header';
import SnapshotPortfolioStats from './components/PortifolioStatsCard';
import SnapshotProductStats from './components/ProductStatsCard';
import TitleMain from './components/TitleMain';
import { IResponseData, snapshotProductType } from './interfaces/apiResponse';
import api from './services/api';
import { formatToCurrency } from './utils/formatToCurrency';




function App() {

  const [fixedIncomeData, setFixedIncomeData] = useState<IResponseData>({} as IResponseData);
  const [isLoading, setLoading] = useState(true);
  const [snapshotList, setSnapshotList] = useState<snapshotProductType[]>([]);
 

  useEffect(() => {
    setLoading(true)
    api.get('/getFixedIncomeClassData').then((response) => {
      const responseFixedIncome = response.data;
      setFixedIncomeData(responseFixedIncome.data);
      setSnapshotList(responseFixedIncome.data.snapshotByProduct)
      setLoading(false)
    })
  }, [])

  const filterByName = (e:any) => {
    const searchTerm = e.target.value;
    const filterData =snapshotList.filter((item)=>{
      return item.fixedIncome.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSnapshotList(filterData)
    if(searchTerm === ''){
      setSnapshotList(fixedIncomeData.snapshotByProduct)
    }
  }

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
              <select>
                <option value="" disabled selected>Ordenar por</option>
                <option value="valor1">Valor 1</option>
                <option value="valor2">Valor 2</option>
                <option value="valor3">Valor 3</option>
              </select>
              <input type="text" placeholder='' onChange={filterByName} />
            </InputxBox>
          </ContainerTop>
          <hr />
          <div className='card_conatiner'>
            {isLoading ? <p>Carregando...</p> : (
              <>
                {snapshotList.map((item) => {
                  return (
                    <>
                      <SnapshotProductStats
                        title='Título'
                        dataFixed={item.fixedIncome}
                      />
                      <SnapshotProductStats
                        title='Minha Posição'
                        dataPosition={item.position}
                      />
                      <SnapshotProductStats
                        title='Vencimento'
                        dataDue={item.due}
                      />
                    </>
                  )
                })}
              </>
            )}

          </div>
        </FixedIncomeDetails>
      </GeneralBody>
    </div>
  );
}

export default App;
