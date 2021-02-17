import React, {useContext, useEffect} from 'react'
import IncomesContext from '../context/IncomesContext'
import { PositionFormatter } from '../styles';
import Loading from './Loading'


function Position() {
  const { fixedIncomes, isLoading, getAPI } = useContext(IncomesContext);


  useEffect(() => {
    getAPI()
  },[]);

return(
  <PositionFormatter>
  {isLoading ? <Loading/> : (
  fixedIncomes.map((place, index) =>
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
  )
}

export default Position;