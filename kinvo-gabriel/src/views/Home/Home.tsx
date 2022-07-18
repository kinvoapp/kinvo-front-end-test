import { Stack } from '@mui/material'
import { FixedIncome, FixedIncomeDetailed, FixedIncomeGraphic, WalletGraphic } from './components'

export const Home: React.FC = () => {
 
  return (
    <Stack>
      <FixedIncome />
      <FixedIncomeGraphic />
      <FixedIncomeDetailed />
      <WalletGraphic />
    </Stack>
  )
}
