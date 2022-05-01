import React from "react";
import './HomeDataProfit.scss'

const HomeDataProfit = ({ title, data }) => {
  return (
    <div className="home-data-profit">
      <h1>{title}</h1>

      {data.snapshotByProduct.map((item) => (
        <section className="home-data-list" style={{ border: "1px solid black" }}>
          <div className="home-data-item">
            <h2>Titulo</h2>
            <div>{item.fixedIncome.name}</div>
            <div>{item.fixedIncome.bondType}</div>
          </div>
          <div className="home-data-item">
            <h2>Titulo</h2>
            <div>{item.fixedIncome.name}</div>
            <div>{item.fixedIncome.bondType}</div>
          </div>
          <div className="home-data-item">
            <h2>Titulo</h2>
            <div>{item.fixedIncome.name}</div>
            <div>{item.fixedIncome.bondType}</div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default HomeDataProfit;
