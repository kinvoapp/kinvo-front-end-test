import { Stack, Typography, Select, MenuItem } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useApiDataStore } from '../../../../../../store/apiData'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { orderByOptions } from '../../../../../../utils/options'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { useState } from 'react'

export const Header: React.FC = () => {
  const [selected, setSelected] = useState<number>(1)
  const { storeState: { currentData }, operations: { updateCurrentApiData } } = useApiDataStore()

  const filterByName = (name: string) => {
    const lowCaseName = name.toLowerCase()

    const filteredItems = currentData!.snapshotByProduct.filter(
      item => item.fixedIncome.name.toLowerCase().includes(lowCaseName)
    )

    updateCurrentApiData({
      ...currentData!, filteredSnapshotByProduct: filteredItems
    })
  }

  const clearFilteredItemsByName = () => {
    updateCurrentApiData({ ...currentData!, filteredSnapshotByProduct: [] })
  }

  const orderByInvestedAmount = (value: number) => {

    clearFilteredItemsByName()

    const orderedItems = [...currentData!.snapshotByProduct]

    if (value === 2) {
      orderedItems.sort((prev, curr) => {
        if (prev.position.valueApplied > curr.position.valueApplied) return -1
        if (prev.position.valueApplied < curr.position.valueApplied) return 1
        return 0
      })
    }
    if (value === 3) {
      orderedItems.sort((prev, curr) => {
        if (prev.position.valueApplied > curr.position.valueApplied) return 1
        if (prev.position.valueApplied < curr.position.valueApplied) return -1
        return 0
      })
    }

    updateCurrentApiData({
      ...currentData!, filteredSnapshotByProduct: orderedItems
    })
  }

  const handleSelectChange = (value: number) => {
    setSelected(value)
    if (value > 1) {
      orderByInvestedAmount(value)
    }
  }

  return (
    <Stack alignItems='center' padding={2} justifyContent='space-between' direction='row'>
      <Typography variant='h4' color='grey.200'>Minhas Rendas Fixas</Typography>
      <Stack alignItems='center' sx={{ color: 'gray.50' }} direction='row' spacing={2}>
        <Stack>
          <Select
            value={selected}
            IconComponent={() => <ExpandMoreOutlinedIcon sx={{ color: '#DAE0E3' }} />}
            onChange={(e) => handleSelectChange(e.target.value as number)}
            sx={{
              '&.MuiOutlinedInput-root > div': {
                fontSize: '12px',
                color: 'grey.100',
                fontFamily: 'Montserrat',
                padding: '4px 32px 4px 8px !important',
              }
            }}
          >
            {orderByOptions.map(item => (
              <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
        </Stack>
        <Stack
          padding={.5}
          direction='row'
          borderRadius={2}
          alignItems='center'
          border='1px solid #DAE0E3'
        >
          <SearchOutlinedIcon sx={{ color: '#DAE0E3' }} />
          <input
            style={{ border: 'none' }}
            onKeyDown={(e) => e.keyCode === 13 ? filterByName(e.target.value) : e.target.value}
          />
          {
            currentData!.filteredSnapshotByProduct
            && currentData!.filteredSnapshotByProduct.length > 0
            && (
              <Stack sx={{ cursor: 'pointer' }} onClick={() => clearFilteredItemsByName()}>
                <CloseOutlinedIcon sx={{ color: '#DAE0E3' }} />
              </Stack>
            )
          }

        </Stack>
      </Stack>
    </Stack>
  )
}
