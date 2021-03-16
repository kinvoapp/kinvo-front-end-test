import { useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import SideMenu from '../../components/SideMenu';
import Blocks from '../../components/Blocks';
import Board from '../Board';

import {
  getPortfolio,
  fetchPortfolio,
  SnapshotPortfolio,
} from '../../ducks/inovice';
import { Container, InnerContainer } from './style';

function ActiveIncome(props: {
  fetchPortfolio: () => void;
  portfolio: SnapshotPortfolio;
}) {
  const { portfolio, fetchPortfolio } = props;

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return (
    <>
      <Header portfolio={portfolio} />
      <Container>
        <SideMenu />
        <InnerContainer>
          <Blocks portfolio={portfolio} />
          <Board />
        </InnerContainer>
      </Container>
    </>
  );
}

export default connect(getPortfolio, (dispatch: any) => ({
  fetchPortfolio: () => dispatch(fetchPortfolio()),
}))(ActiveIncome);
