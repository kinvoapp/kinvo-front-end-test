import { Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useApiDataStore } from '../../store/apiData'
import { InfoBox } from './components/InfoBox'

export const Home: React.FC = () => {

  const { operations: { updateCurrentApiData }, storeState: { currentData } } = useApiDataStore()

  useEffect(() => {
    fetch(`https://6270328d6a36d4d62c16327c.mockapi.io/getFixedIncomeClassData`)
      .then((response) => response.json())
      .then((json) => updateCurrentApiData(json.data))

  }, [])


  return (
    <Stack paddingX={2} paddingY={4}>
      <Typography variant='h3' color='secondary.main'>Renda Fixa</Typography>
      <Stack spacing={2} mt={3} direction='row' justifyContent='space-between'>
        <InfoBox label='SALDO BRUTO' value='R$ 207.663,10' />
        <InfoBox label='VALOR APLICADO' value='R$ 170.025,64' />
        <InfoBox label='RESULTADO' value='R$ 37.638,46' />
        <InfoBox label='RENTABILIDADE' value='25,08%' />
        <InfoBox label='CDI' value='23,68%' />
        <InfoBox label='% SOBRE CDI' value='320%' />
      </Stack>
    </Stack>
  )
}
