import { useState } from 'react'
import { Footer, Header } from './components'
import { formatToRealStr } from '../../../../utils/format'
import { useApiDataStore } from '../../../../store/apiData'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Stack, Card, Typography, Tooltip, IconButton } from '@mui/material'

export const FixedIncomeDetailed: React.FC = () => {
  const [amountOfItems, setAmountOfItems] = useState<number>(5)
  const { storeState: { currentData } } = useApiDataStore()

  const sliceItems = (items: any[]) => {
    return amountOfItems <= 5 ?
      items.splice(0, 5) : items.splice(5)
  }

  const currentItems = () => {
    if (currentData!.orderedSnapshotByProduct && currentData!.orderedSnapshotByProduct.length > 0) {
      return sliceItems(currentData!.orderedSnapshotByProduct)
    }
    if (currentData!.filteredSnapshotByProduct && currentData!.filteredSnapshotByProduct.length > 0) {
      return sliceItems(currentData!.filteredSnapshotByProduct)
    }
    if (amountOfItems <= 5) {
      return currentData!.snapshotByProduct.slice(0, 5)
    }
    return currentData!.snapshotByProduct.slice(5)
  }

  return (
    <Card sx={{ borderRadius: 3, }}>
      <Stack justifyContent='space-between'>
        <Header />
        {currentItems().map((item, index) => (
          <Stack
            p={2}
            key={index}
            spacing={1}
            direction='row'
            bgcolor={index % 2 === 0 ? 'unset' : 'rgba(218, 224, 227, .2)'}
          >
            <Stack justifyContent='space-between' width='30%' border='1px solid #DAE0E3' padding={1} borderRadius={3}>
              <Stack alignItems='center' direction='row'>
                <Typography color='grey.300' variant='text3'>TÍTULO</Typography>
                <Tooltip title='Tooltip' placement='top'>
                  <IconButton sx={{ '&.MuiButtonBase-root > svg': { height: '1rem' } }} color='info' >
                    <InfoOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction='row' alignItems='flex-end' justifyContent='space-between'>
                <Typography variant='text5' width='55%'>{item.fixedIncome.name}</Typography>
                <Stack>
                  <Typography color='grey.300' variant='text3'>CLASSE</Typography>
                  <Typography variant='text5' color='primary.main'>{item.fixedIncome.bondType}</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack justifyContent='space-between' width='50%' border='1px solid #DAE0E3' padding={1} borderRadius={3}>
              <Stack alignItems='center' direction='row'>
                <Typography color='grey.300' variant='text3'>MINHA POSIÇÃO</Typography>
                <Tooltip title='Tooltip' placement='top'>
                  <IconButton sx={{ '&.MuiButtonBase-root > svg': { height: '1rem' } }} color='info' >
                    <InfoOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction='row' justifyContent='space-between'>
                <Stack>
                  <Typography color='grey.300' variant='text3'>VALOR INVES.</Typography>
                  <Typography color='success.main'>{formatToRealStr(item.position.valueApplied)}</Typography>
                </Stack>
                <Stack>
                  <Typography color='grey.300' variant='text3'>SALDO BRUTO</Typography>
                  <Typography color='success.main'>{formatToRealStr(item.position.equity)}</Typography>
                </Stack>
                <Stack>
                  <Typography color='grey.300' variant='text3'>RENT.</Typography>
                  <Typography color='success.main'>{item.position.profitability}%</Typography>
                </Stack>
                <Stack>
                  <Typography color='grey.300' variant='text3'>% DA CART.</Typography>
                  <Typography color='success.main'>{item.position.portfolioPercentage}%</Typography>
                </Stack>
                <Stack>
                  <Typography color='grey.300' variant='text3'>{item.position.indexerLabel}</Typography>
                  <Typography color='success.main'>{item.position.indexerValue}%</Typography>
                </Stack>
                <Stack>
                  <Typography color='grey.300' variant='text3'>SOBRE CDI</Typography>
                  <Typography color='success.main'>{item.position.percentageOverIndexer}%</Typography>
                </Stack>
              </Stack>
            </Stack>

            <Stack justifyContent='space-between' width='20%' border='1px solid #DAE0E3' padding={1} borderRadius={3}>
              <Stack alignItems='center' direction='row'>
                <Typography color='grey.300' variant='text3'>VENCIMENTO</Typography>
                <Tooltip title='Tooltip' placement='top'>
                  <IconButton sx={{ '&.MuiButtonBase-root > svg': { height: '1rem' } }} color='info' >
                    <InfoOutlinedIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
              <Stack direction='row' justifyContent='space-between'>
                <Stack>
                  <Typography variant='text3'>DATA VENC.</Typography>
                  <Typography color='secondary.main'>{item.due.date.replaceAll('/', '.')}</Typography>
                </Stack>
                <Stack>
                  <Typography variant='text3'>DIAS ATÉ VENC.</Typography>
                  <Typography color='secondary.main'>{item.due.daysUntilExpiration}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
        <Footer amountOfItems={amountOfItems} setAmountOfItems={setAmountOfItems} />
      </Stack>
    </Card>
  )
}
