import "./MainHeader.css";
import React from "react";
import MainHeaderCard from "../MainHeaderCard/MainHeaderCard";

function MainHeader({ rendaFixa }) {
  return (
    <div>
      <h2 id='main-header-title'>Renda Fixa</h2>

      <div className='cards-section'>
        <MainHeaderCard title='SALDO BRUTO' content={rendaFixa.equity} />

        <MainHeaderCard
          title='VALOR APLICADO'
          content={rendaFixa.valueApplied}
        />

        <MainHeaderCard title='RESULTADO' content={rendaFixa.equityProfit} />

        <MainHeaderCard
          title='RENTABILIDADE'
          content={rendaFixa.percentageProfit + "%"}
        />

        <MainHeaderCard title='CDI' content={rendaFixa.indexerValue + "%"} />

        <MainHeaderCard
          title='% SOBRE CDI'
          content={rendaFixa.percentageOverIndexer + "%"}
        />
      </div>
    </div>
  );
}

export default MainHeader;
