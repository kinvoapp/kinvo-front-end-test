import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import NavbarItem from '../NavbarItem';

import Saldo from '../../assets/navbar1.svg';
import Valor from '../../assets/navbar2.svg';
import Rentabilidade from '../../assets/navbar3.svg';
import Carteira from '../../assets/navbar4.svg';
import Menu from '../../assets/navbar5.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    font: "Montserrat"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


export default function Navbar() {
  const classes = useStyles();

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
            <NavbarItem to="/resumo" text="1000000" textUp="SALDO BRUTO" img={Saldo} />
            <NavbarItem to="/resumo" text="1000000" textUp="VALOR APLICADO" img={Valor} />
            <NavbarItem to="/resumo" text="100%" textUp="RENTABILIDADE" img={Rentabilidade} />
            <NavbarItem to="/resumo" text="Minha Carteira" textUp="CARTEIRA" img={Carteira} />
            <NavbarItem to="/resumo" img={Menu} />    
          </div>
        </Toolbar>
      </AppBar>
  );
}