import React from "react";

const HomeDataPosition = ({ position }) => {
  return (
    <div className="home-data-position">
      <div className="home-data-position-title">
        <h3>Minha posição</h3>
      </div>
      <div className="home-data-position-item">
        <div className="home-data-position-item-data">
          <h4>Valor Inves.</h4>
          <p>{position.equity.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </div>
        <div className="home-data-position-item-data">
          <h4>Saldo Bruto</h4>
          <p>{position.valueApplied.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
        </div>
        <div className="home-data-position-item-data">
          <h4>Rent.</h4>
          <p>{position.indexerValue}</p>
        </div>
        <div className="home-data-position-item-data">
          <h4>% Da Cart.</h4>
          <p>{position.percentageOverIndexer}</p>
        </div>
        <div className="home-data-position-item-data">
          <h4>CDI</h4>
          <p>{position.portfolioPercentage}</p>
        </div>
        <div className="home-data-position-item-data">
          <h4>Sobre CDI</h4>
          <p>{position.profitability}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataPosition;
