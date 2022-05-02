import React from "react";

const HomeDataFixedIncome = ({ fixedIncome }) => {
  return (
    <div className="home-data-fixedIncome">
      <div className="home-data-fixedIncome-title">
        <h3>Titulo</h3>
      </div>
      <div className="home-data-fixedIncome-item">
        <div className="home-data-fixedIncome-item-title">
          <p>{fixedIncome.name}</p>
        </div>

        <div className="home-data-fixedIncome-item-data">
          <h4>Classe</h4>
          <p>{fixedIncome.bondType}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataFixedIncome;
