import { Dispatch, SetStateAction } from 'react'
import { styled } from '@mui/styles'
import { Stack, Typography } from '@mui/material'
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined'

interface FooterProps {
  amountOfItems: number
  setAmountOfItems: Dispatch<SetStateAction<number>>
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { setAmountOfItems, amountOfItems } = props

  const PaginationBox = styled(Stack)({
    width: '25px',
    padding: '4px',
    height: '25px',
    borderRadius: '8px',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #DAE0E3',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  })

  return (
    <Stack
      padding={2}
      spacing={2}
      direction='row'
      alignItems='center'
      justifyContent='center'
      borderTop='1px solid rgba(218, 224, 227, .5)'
    >
      <PaginationBox
        sx={{ cursor: 'pointer' }}
        onClick={() => setAmountOfItems(prev => prev / 5)}
      >
        <ChevronLeftOutlinedIcon sx={{ color: '#707B81' }} />
      </PaginationBox>
      <PaginationBox
        sx={{
          color: amountOfItems <= 5 ? 'white' : '#DAE0E3',
          bgcolor: amountOfItems <= 5 ? '#DAE0E3' : 'unset'
        }}
      >
        <Typography variant='text3'>1</Typography>
      </PaginationBox>
      <PaginationBox
        sx={{
          color: amountOfItems > 5 ? 'white' : '#DAE0E3',
          bgcolor: amountOfItems > 5 ? '#DAE0E3' : 'unset'
        }}
      >
        <Typography variant='text3'>2</Typography>
      </PaginationBox>
      <PaginationBox
        sx={{ cursor: 'pointer' }}
        onClick={() => setAmountOfItems(prev => prev * 5)}
      >
        <ChevronRightOutlinedIcon sx={{ color: '#707B81' }} />
      </PaginationBox>
    </Stack>
  )
}
