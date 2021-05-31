import React, { useEffect } from 'react'
import styled from 'styled-components'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import CardInfo from './card-info'

/*
  Componentes style
*/
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2)
      }
    }
  })
)

export const Card = styled.div`
  border-radius: 10px;
  height: auto;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
`
export const Head = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid black;
`
export const Footer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  border-top: 1px solid black;
  align-items: center;
  margin: 0 auto;
`

export const Elements = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Order = styled.input``
export const Search = styled.input``

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC = () => {
  useEffect(() => {
    console.log('First log')
  }, [])
  return (
    <Card>
      <Head>
        <h1>Minhas Rendas Fixas</h1>
        <Elements>
          <Order />
          <Search />
        </Elements>
      </Head>
      {[1, 2].map(v => (
        <CardInfo isColor={v % 2 === 0} key={v} />
      ))}
      <Footer>
        <Pagination count={2} variant="outlined" shape="rounded" />
      </Footer>
    </Card>
  )
}
export default MicroCard
