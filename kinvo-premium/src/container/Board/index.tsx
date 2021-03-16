import {
  Container,
  BoardContainer,
  Title,
  BoardButtonsContainer,
  BoardHead,
  ContainerCards,
  AlertText,
  StyledSpinner
} from './style';

import { useState } from 'react';
import { connect } from 'react-redux';

import Search from '../../components/Board/search';
import Filter from '../../components/Board/filterOptions';
import { Card, Result, DueDate } from '../../components/Board/cards';
import Pagination from '../../components/Board/pagination';
import {
  SnapshotProduct,
  getPortfolio,
  orderProductByDate,
  orderProductByHighestInvestment,
  orderProductByHighestProfitability,
  searchProductByTitle,
  cleanProducts
} from '../../ducks/inovice';

function Board(props: {
  listProducts: SnapshotProduct[];
  intactProducts: SnapshotProduct[];
  orderProductByDate: (listProducts: SnapshotProduct[]) => void;
  orderProductByHighestInvestment: (listProducts: SnapshotProduct[]) => void;
  orderProductByHighestProfitability: (listProducts: SnapshotProduct[]) => void;
  searchProductByTitle: (listProducts: SnapshotProduct[], name: string) => void;
  cleanProducts: (listProducts: SnapshotProduct[]) => void;
  error: string | null;
  loading: boolean;
}) {
  const {
    listProducts,
    intactProducts,
    orderProductByDate,
    orderProductByHighestInvestment,
    orderProductByHighestProfitability,
    searchProductByTitle,
    cleanProducts, 
    error, 
    loading
  } = props;

  const [actualPage, setActualPage] = useState(1);

  const productData = listProducts?.slice(
    (actualPage - 1) * 5,
    (actualPage - 1) * 5 + 5
  );

  const Spinner = () => (
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  );

  return (
    <Container>
      <BoardContainer>
        <BoardHead>
          <Title>Minhas Rendas Fixa</Title>
          <BoardButtonsContainer>
            <Filter
              ordenations={[
                {
                  name: 'Ordenar por',
                  onClick: () => {},
                },
                {
                  name: 'Prox. Vencimento',
                  onClick: () => orderProductByDate(intactProducts),
                },
                {
                  name: 'Maior Investimento',
                  onClick: () => orderProductByHighestInvestment(intactProducts),
                },
                {
                  name: 'Maior Rentabilidade',
                  onClick: () => orderProductByHighestProfitability(intactProducts),
                },
              ]}
            />
            <Search onSearch={(text) => {searchProductByTitle( intactProducts, text)}}  cancelSearch={() => {cleanProducts(intactProducts)}}/>
          </BoardButtonsContainer>
        </BoardHead>
        {loading && <Spinner />}
        {error !== null && <AlertText>{error}</AlertText>}
        {productData.length > 0 && productData.map((item: SnapshotProduct, idx: number) => {
          return (
            <ContainerCards
              color={idx % 2 != 0 ? 'var(--gray-active)' : 'var(--white)'}
              key={idx}
            >
              <Card income={item.fixedIncome} />
              <Result position={item.position} />
              <DueDate due={item.due} />
            </ContainerCards>
          );
        })}
        <Pagination
          actualPage={actualPage}
          totalItems={listProducts.length}
          onClick={(txt: number) => {
            setActualPage(txt);
          }}
          valuePerPage={5}
        />
      </BoardContainer>
    </Container>
  );
}

export default connect(getPortfolio, (dispatch: any) => ({
  orderProductByDate: (listProducts: SnapshotProduct[]) =>
    dispatch(orderProductByDate(listProducts)),
  orderProductByHighestInvestment: (listProducts: SnapshotProduct[]) =>
    dispatch(orderProductByHighestInvestment(listProducts)),
  orderProductByHighestProfitability: (listProducts: SnapshotProduct[]) =>
    dispatch(orderProductByHighestProfitability(listProducts)),
  searchProductByTitle: (listProducts: SnapshotProduct[], name: string) => dispatch(searchProductByTitle(listProducts, name)),
  cleanProducts: (listProducts: SnapshotProduct[]) => dispatch(cleanProducts(listProducts))
}))(Board);
