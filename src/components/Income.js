import React, {useContext, useEffect} from 'react'
import IncomesContext from '../context/IncomesContext'
import { IncomeFormatter } from '../styles';
import Loading from './Loading'


function Income() {
  const { fixedIncomes, isLoading, getAPI } = useContext(IncomesContext);

  useEffect(() => {
    getAPI()
  }, [])

return(
    <IncomeFormatter>
      {isLoading ? <Loading/> : (
      fixedIncomes.map((place, index) =>
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
  )
}

export default Income;

