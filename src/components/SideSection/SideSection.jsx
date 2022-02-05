import "./SideSection.css";
import React from "react";

//? SVG's
import ativos from "../../assets/side-content/ativos.svg";
import cadeado from "../../assets/side-content/cadeado.svg";
import diamante from "../../assets/side-content/diamante.svg";
import dinheiro from "../../assets/side-content/dinheiro.svg";
import produtos from "../../assets/side-content/produtos.svg";
import projecao from "../../assets/side-content/projecao.svg";
import resumo from "../../assets/side-content/resumo.svg";
import risco from "../../assets/side-content/risco.svg";

//? Componentes
import SideSectionContent from "../SideSectionContent/SideSectionContent";

const SideSection = () => {
  return (
    <div className='side-section'>
      {/* //TODO Conteiner geral com 100% de largura */}
      {/* //TODO Ícone SVG */}
      {/* //TODO Titulo */}
      {/* //TODO border bottom */}
      {/* //TODO Ícone SVG para abrir seção */}
      <SideSectionContent iconSvg={resumo} title='Resumo Da Carteira' />
      <SideSectionContent iconSvg={produtos} title='Meus Produtos' />
      <SideSectionContent iconSvg={dinheiro} title='Meus proventos' />
      <SideSectionContent iconSvg={ativos} title='Classes de Ativos' />
      <SideSectionContent iconSvg={diamante} title='Rentabilidade Real' />
      <SideSectionContent iconSvg={projecao} title='Projeção de Carteira' />
      <SideSectionContent iconSvg={risco} title='Risco x Retorno' />
      <SideSectionContent iconSvg={cadeado} title='Cobertura do FGC' />
    </div>
  );
};

export default SideSection;
