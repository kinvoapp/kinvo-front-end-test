import React, {useContext, useEffect} from 'react'
import IncomeContext from '../context/IncomesContext'
import { DueFormatter, Flex, IncomeFormatter, PositionFormatter, SelectFormatter } from '../styles';
import Loading from './Loading';

function Sort() {

  const {sort, setSort, fixedIncomes, getAPI, isLoading} = useContext(IncomeContext);

  useEffect(() => {
    getAPI()
  }, [])


  function handleSelect(e){
    setSort(e.target.value)
  }

  const sortedIncomes = fixedIncomes.sort((a,b) => {
    if(sort === 'farthest') {
      return a.due.daysUntilExpiration - b.due.daysUntilExpiration
    }else if(sort === 'closest') {
      return b.due.daysUntilExpiration - a.due.daysUntilExpiration
    } 
  })


  return (
    <div>
      <SelectFormatter>

        <h1>Minhas Rendas Fixas</h1>
        <select style={{'border-radius':'8px', 'border':'1px solid #cccccc', 'height':'40px'}} id="column" onChange={handleSelect}>

        <option value="none">Ordenar Por</option>
        <option value="farthest" key="index">Vencimento Próximo</option>
        <option value="closest" key="index">Vencimento Distante</option>

        </select>
      </SelectFormatter>

      <Flex>
          <IncomeFormatter>
          {isLoading ? <Loading/> : (
          sortedIncomes.map((place, index) =>
            <div>
              <span>
              <h5>{Object.values(place.fixedIncome.name)}</h5>
              </span>

              <span>
              <p>CLASSE</p>
              <h4>{Object.values(place.fixedIncome.bondType)}</h4>
              </span>
            </div>)
          )}
        </IncomeFormatter>

        <PositionFormatter>
      {isLoading ? <Loading/> : (
      sortedIncomes.map((place, index) =>
        <div>
          <span>
          <p>VALOR INVES</p>
          <h4>{place.position.valueApplied}</h4>
          </span>

          <span>
          <p>SALDO BRUTO</p>
          <h4>{place.position.equity}</h4>
          </span>

          <span>
          <p>RENT.</p>
          <h4>{place.position.profitability}%</h4>
          </span>

          <span>
          <p>% DA CART.</p>
          <h4>{place.position.portfolioPercentage}%</h4>
          </span>

          <span>
          <p>CDI</p>
          <h4>{place.position.indexerValue}%</h4>
          </span>

          <span>
          <p>SOBRE CDI</p>
          <h4>{place.position.percentageOverIndexer}%</h4>
          </span>
        </div>)
      )}
      </PositionFormatter>

      <DueFormatter>
          {isLoading ? <Loading/> : (
          sortedIncomes.map((place, index) =>
            <div>
              <span>
              <p>DATA VENC.</p>
              <h4>{Object.values(place.due.date)}</h4>
              </span>

              <span>
              <p>DIAS ATÉ VENC.</p>
              <h4>{place.due.daysUntilExpiration}</h4>
              </span>
            </div>)
          )}
        </DueFormatter>

      </Flex>

    </div>
  )
}

export default Sort
