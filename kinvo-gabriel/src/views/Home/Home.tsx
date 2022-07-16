import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { useApiDataStore } from '../../store/apiData'
import { FixedIncome, FixedIncomeDetailed } from './components'

export const Home: React.FC = () => {
  const { operations: { updateCurrentApiData } } = useApiDataStore()

  useEffect(() => {
    fetch(`https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData`)
      .then((response) => response.json())
      .then((json) => updateCurrentApiData(json.data))

    /*
      Normalmente usaria react-query. Mas, como há somente 1 requisição
      e o tempo é curto, optei por usar a api de fetch nativa 
     */

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <Stack>
      <FixedIncome />
      <FixedIncomeDetailed />
           
    </Stack>
  )
}
