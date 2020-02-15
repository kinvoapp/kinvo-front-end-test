import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CustomListItemIcon from './CustomListItem';
import Divider from '@material-ui/core/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, faDollarSign, faLock, faClock, faMoneyBillWaveAlt , faDatabase } 
    from '@fortawesome/free-solid-svg-icons';

export const mainListItems = 
  <div>
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faClock} style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Resumo da <br/>
          Carteira<br/>
          </p>
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <DashboardIcon style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Meus<br/>
          Produtos<br/>
          </p>
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faMoneyBillWaveAlt} style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Meus<br/>
          Proventos<br/>
          </p>          
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faDatabase} style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Análise por<br/>
          Classe de Crédito<br/>
          </p>          
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faDollarSign} style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Rentabilidade<br/>
          Real<br/>
          </p>          
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faProjectDiagram}style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Projeção<br/>
          da Carteira<br/>
          </p>          
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <AcUnitIcon style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Risco<br/>
          x Retorno<br/>
          </p>        
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
      <ListItem button style={{ paddingTop: "0px", paddingBottom:"0px" }}>
          <CustomListItemIcon>
              <FontAwesomeIcon icon={faLock}style={{ color:"#cfcfcf" }}/>
          </CustomListItemIcon>
          <p style={{ minWidth: "130px", fontSize:"15px", color:"gray" }}>Cobertura<br/>
          do FGC<br/>
          </p>        
          <ChevronRightIcon style={{ color:"gray" }} />
      </ListItem>
      <Divider />
  </div>
;