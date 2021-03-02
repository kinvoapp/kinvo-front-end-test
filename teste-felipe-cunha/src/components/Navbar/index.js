import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavbarItem from '../NavbarItem';

import Saldo from '../../assets/navbar1.svg';
import Valor from '../../assets/navbar2.svg';
import Rentabilidade from '../../assets/navbar3.svg';
import Carteira from '../../assets/navbar4.svg';
import Menu from '../../assets/navbar5.svg';


export default function Navbar() {

  const [portfolioHeader, setPortfolioHeader] = React.useState({});
  const [actions, setActions] = useState([]);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/getFixedIncomeClassData');
      const { data } = response.data;
      const { snapshotByPortfolio, snapshotByProduct } = data;
      setPortfolioHeader(snapshotByPortfolio)
      setActions(snapshotByProduct);
    }
    loadData();
  }, []);

  return (
      <AppBar position="static" style={{boxShadow: "none"}}>
        <Toolbar style={{ minHeight: "90px", backgroundColor: "white", display: "flex", justifyContent: "flex-end", alignItems: "center"}} variant="regular">
          <div style={{display: "flex", justifyContent: "flex-end", paddingRight:"200px", marginRight: 'auto'}}>
            <Typography style={{color: "#4C309B", fontWeight: "800"}} variant="h4">
              kinvo
            </Typography>
            <Typography style={{color: "#707B81", fontWeight: "200"}} variant="h4">
              premium
            </Typography>
          </div>
          <div style={{display: 'flex'}}>
            <NavbarItem to="/saldo" number={portfolioHeader.equity} textUp="SALDO BRUTO" img={Saldo} />
            <NavbarItem to="/valor" number={portfolioHeader.valueApplied} textUp="VALOR APLICADO" img={Valor} />
            <NavbarItem to="/rentabilidade" percent={portfolioHeader.percentageProfit} textUp="RENTABILIDADE" img={Rentabilidade} />
            <NavbarItem to="/ativos" text="Minha Carteira" textUp="CARTEIRA" img={Carteira} />
            <NavbarItem to="/ativos" img={Menu} />    
          </div>
        </Toolbar>
      </AppBar>
  );
}