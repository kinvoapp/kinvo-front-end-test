import React from 'react';

import SidebarItem from '../SidebarItem';

import Resumo from '../../assets/resumo.svg';
import Produtos from '../../assets/produtos.svg';
import Proventos from '../../assets/proventos.svg';
import Ativos from '../../assets/ativos.svg';
import Rentabilidade from '../../assets/rentabilidade.svg';
import Projeção from '../../assets/projeção.svg';
import Risco from '../../assets/risco.svg';
import FGC from '../../assets/fgc.svg';

import { Container } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <SidebarItem to="/resumo" text="Resumo Da Carteira" img={Resumo} />
      <SidebarItem to="/produtos" text="Meus Produtos" img={Produtos} />
      <SidebarItem to="/proventos" text="Meus Proventos" img={Proventos} />
      <SidebarItem to="/ativos" text="Classe de Ativos" img={Ativos} />
      <SidebarItem to="/rentabilidade" text="Rentabilidade Real" img={Rentabilidade} />
      <SidebarItem to="/projecao" text="Projeção da Carteira" img={Projeção} />
      <SidebarItem to="/risco" text="Risco x Retorno" img={Risco} />
      <SidebarItem to="/fgc" text="Cobertura do FGC" img={FGC} />
    </Container>
  );
}
