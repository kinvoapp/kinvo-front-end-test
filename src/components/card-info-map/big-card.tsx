import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Pagination from '@material-ui/lab/Pagination'
import CardInfo from './card-info'
import { useSelector } from 'react-redux'
import { ApplicationState } from '../../store'
import { PaginationUtil } from '../../utils/pagination'
import Select from '../common/form-select'
import { productOrders } from '../../utils/constants'
import { OrderUtil } from '../../utils/order'
import { formatMoney, formatPercent } from '../../utils/formatValues'
/*
  Componentes style
*/

export const Card = styled.div`
  border-radius: 10px;
  height: auto;
  background-color: ${p => p.theme.colors.white};
  align-items: center;
  box-shadow: 0px 2px 6px #0000000a;
  border-radius: 10px;
`
export const Head = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  border-bottom: 1px solid ${p => p.theme.colors.border.main};
`
export const Footer = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  border-top: 1px solid ${p => p.theme.colors.border.main};
  align-items: center;
  margin: 0 auto;
`

export const Elements = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Search = styled.input`
  border-radius: 10px;
  margin: 0 10px;
  border: 1px solid ${p => p.theme.colors.border.main};
`

/*
  MAIN
  @TEX
*/
const MicroCard: React.FC = () => {
  const { snapshotByProduct } = useSelector(
    (state: ApplicationState) => state.local.data.data
  )
  const [currentPage, setCurrentPage] = useState(1)
  const [order, setOrder] = useState('')
  const [listCurrentPage, setListCurrentPage] = useState(snapshotByProduct)
  const peerPage = 5

  useEffect(() => {
    setListCurrentPage(PaginationUtil(snapshotByProduct, peerPage, currentPage))
  }, [currentPage, snapshotByProduct, peerPage])

  useEffect(() => {
    const newOrder = OrderUtil(order, snapshotByProduct)
    setListCurrentPage(PaginationUtil(newOrder, peerPage, currentPage))
  }, [order, snapshotByProduct])

  return (
    <Card>
      <Head>
        <h1>Minhas Rendas Fixas</h1>
        <Elements>
          <Select
            options={productOrders}
            onChange={setOrder}
            label="Ordernar por"
          />
          <Search />
        </Elements>
      </Head>
      {listCurrentPage.map((v: any, index) => (
        <CardInfo
          isColor={(index + 1) % 2 === 0}
          key={v.fixedIncome.name}
          title={v.fixedIncome.name}
          bondType={v.fixedIncome.bondType}
          equity={formatMoney(v.position.equity)}
          profitability={formatPercent(v.position.profitability)}
          valueApplied={formatMoney(v.position.valueApplied)}
          percentageOverIndexer={formatPercent(
            v.position.percentageOverIndexer
          )}
          indexerValue={formatPercent(v.position.indexerValue)}
          portfolioPercentage={formatPercent(v.position.portfolioPercentage)}
          valDate={v.due.date}
          valDays={v.due.daysUntilExpiration}
        />
      ))}
      <Footer>
        <Pagination
          count={Math.ceil(snapshotByProduct.length / peerPage)}
          page={currentPage}
          variant="outlined"
          shape="rounded"
          onChange={(e, page) => setCurrentPage(page)}
        />
      </Footer>
    </Card>
  )
}
export default MicroCard
