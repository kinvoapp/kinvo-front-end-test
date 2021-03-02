import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import SmallCard from '../SmallCard';
import Dropdown from '../Dropdown';
import Pagination from '../Pagination';
import find from '../../assets/find.svg';

import { Container, Info, Box, Header} from './styles';
import TitleCard from '../Card/TitleCard';
import PositionCard from '../Card/PositionCard';
import DueCard from '../Card/DueCard';

export default function Table() {
  const [actions, setActions] = useState([]);
  const [portfolioHeader, setPortfolioHeader] = React.useState({});
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setPostsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await api.get('/getFixedIncomeClassData');
      const { data } = response.data;
      const { snapshotByPortfolio, snapshotByProduct } = data;
      setPortfolioHeader(snapshotByPortfolio)
      setActions(snapshotByProduct);
      setLoading(false);
    }

    loadData();
  }, []);

  //Paginação
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = actions.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Info>
        <SmallCard text="SALDO BRUTO" value={portfolioHeader.equity} prefix="R$ " />
        <SmallCard text="VALOR APLICADO" value={portfolioHeader.valueApplied} prefix="R$ " />
        <SmallCard text="RESULTADO" value={portfolioHeader.equityProfit} prefix="R$ " />
        <SmallCard text="RENTABILIDADE" value={portfolioHeader.percentageProfit} prefix="R$ " />
        <SmallCard text="CDI" value={portfolioHeader.indexerValue} sufix="%" />
        <SmallCard text="% SOBRE CDI" value={portfolioHeader.indexerValue} sufix="%" />
      </Info>

      <Box>
        <Header>
          <h1>Minhas Rendas Fixas</h1>
          <div style={{display: 'flex', height: '40px', placeItems: 'center'}}>
            <Dropdown />
            <div className="input-container">
              <img src={find} alt="search" className="input-img"/>
              <input className="text-input" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
            </div>         
          </div>

        </Header>

        <div>
        
        </div>

        <div style={{display: "flex", flexDirection: "column", height: '100%'}}>
          {currentItems.filter(product => product.fixedIncome.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => {
            return (
              <div style={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
                <TitleCard title={product.fixedIncome.name} className={product.fixedIncome.bondType}/>
                <PositionCard position={product.position}/>
                <DueCard date={product.due.date} days={product.due.daysUntilExpiration}/>
              </div>
            )
          })}
          <Pagination itemsPerPage={itemsPerPage} totalItems={actions.length} paginate={paginate}/>
        </div>
 

      </Box>
    </Container>
  );
}
