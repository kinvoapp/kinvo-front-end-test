import React, {useContext, useEffect} from 'react'
import IncomesContext from '../context/IncomesContext'
import { DueFormatter } from '../styles';
import Loading from './Loading'


function Due() {
  const { fixedIncomes, isLoading, getAPI } = useContext(IncomesContext);


  useEffect(() => {
    getAPI()
  }, [])

return(
  <DueFormatter>
      {isLoading ? <Loading/> : (
      fixedIncomes.map((place, index) =>
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
  )
}

export default Due;