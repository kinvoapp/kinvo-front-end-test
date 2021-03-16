import React from "react";
import { Container, Option, SubOption, Marker } from "./styles";
import wallet from '../../assets/svg/sidemenu/wallet.svg';
import pointer from '../../assets/svg/sidemenu/pointer.svg';
import myproducts from '../../assets/svg/sidemenu/myproducts.svg';
import myearnings from '../../assets/svg/sidemenu/myearnings.svg';
import realprofit from '../../assets/svg/sidemenu/realprofit.svg';
import risk from '../../assets/svg/sidemenu/risk.svg';
import walletprojection from '../../assets/svg/sidemenu/walletprojection.svg';
import FGC from '../../assets/svg/sidemenu/FGC.svg';
import activesclasses from '../../assets/svg/sidemenu/activesclasses.svg';


export default function SideMenu() {
  const options = [
    {
      icon: wallet,
      name: 'Resumo <br/> Da Carteira',
      selected: false,
    },
    {
      icon: myproducts,
      name: 'Meus <br/> Produtos',
      selected: false,
    },
    {
      icon: myearnings,
      name: 'Meus <br/> Proventos',
      selected: false,
    },
    {
      icon: activesclasses,
      name: 'Análise por <br/> Classe de Produto',
      selected: true,
    },
    {
      icon: realprofit,
      name: 'Rentabilidade <br/> Real',
      selected: false,
    },
    {
      icon: walletprojection,
      name: 'Projeção <br/> da Carteira',
      selected: false,
    },
    {
      icon: risk,
      name: 'Risco <br/> x Retorno',
      selected: false,
    },
    {
      icon: FGC,
      name: 'Cobertura <br/> do FGC',
      selected: false,
    },
  ];

  const subOptions = [
    {
      name: 'Ação',
      selected: false,
    },
    {
      name: 'Fundo',
      selected: false,
    },
    {
      name: 'Fundo Imobiliário',
      selected: false,
    },
    {
      name: 'Fundo Renda Fixa',
      selected: true,
    },
  ];




  return (
    <Container>
      {options.map((options) =>{
        const {icon,name,selected} = options;

        return (
          <>
          <Option theme={selected} >
            <div>
              <img src={icon} alt='WalletIcon'/>
              <p dangerouslySetInnerHTML={{__html:name}}/>
            </div>
          
            <img src={pointer} alt='Pointer'/>
          </Option>
          {selected ? subOptions.map((suboptions) => {
            const {name,selected} = suboptions;
            return (
              <SubOption key={name} theme={selected} ><Marker/>{name}</SubOption>
            )
          }) : null } 
          </>          
        )
      })}
    </Container>
  )
}
