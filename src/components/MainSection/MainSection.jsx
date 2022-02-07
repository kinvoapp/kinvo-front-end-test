import "./MainSection.css";
import React from "react";
import MainHeader from "../MainHeader/MainHeader";
import RendasFixas from "../RendasFixas/RendasFixas";

import grafico1 from "../../assets/main-content/grafico1.svg";

function MainSection({
  rendaFixa,
  minhasRendasFixas,
  setSearchText,
  setOrderType,
}) {
  return (
    <div className='main-section'>
      <MainHeader rendaFixa={rendaFixa} />

      <img src={grafico1} alt='Gráfico de Rentabilidade dos Títulos' />

      <RendasFixas
        minhasRendasFixas={minhasRendasFixas}
        setSearchText={setSearchText}
        setOrderType={setOrderType}
      />
    </div>
  );
}

export default MainSection;
