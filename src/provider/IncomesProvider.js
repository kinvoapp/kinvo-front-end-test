import React, { useState, useEffect  } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import IncomesContext from '../context/IncomesContext';

export default function IncomesProvider({children}) {
  const [fixedIncomes, setFixedIncomes ] = useState([]);
  const [ isLoading, setLoading ] = useState (false);
  const [sort, setSort] = useState('');

  const baseURL = "https://1762dd35-8f53-49fd-8b8e-c8134a283cb4.mock.pstmn.io/getFixedIncomeClassData"

  async function getAPI(){
    axios.get(baseURL)
    .then(res => {
      
      let currentState = res.data
      let newState = [currentState].map((element) => element.data)
      let mappedState = newState.map((mappedElement) => mappedElement.snapshotByProduct)
      const incomeType = Object.values(mappedState[0]);
      console.log(incomeType)
      setFixedIncomes(incomeType)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const info ={
    fixedIncomes,
    isLoading,
    getAPI,
    sort,
    setSort,
  }
  
  return (
   <IncomesContext.Provider value={info}>
     {children}
   </IncomesContext.Provider>
  )
}

IncomesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

