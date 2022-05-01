import React from "react";

import "./Home.scss";

import chart from "./img/chart.png";

import HomeDataBlockItem from "./HomeDataBlockItem/HomeDataBlockItem";
import HomeDataProfit from "./HomeDataProfit/HomeDataProfit";

const Home = ({ data }) => {
  const dataSnapShot = data.snapshotByPortfolio;
  const dataprofit = data;

  return (
    <main>
      <div className="home-content">
        <div className="home-title">
          <h1 style={{ width: "100%" }}>Renta Fixa</h1>
        </div>
        <section className="home-data-block">
          <HomeDataBlockItem title="Saldo Bruto" data={"R$ " + dataSnapShot.equity} />
          <HomeDataBlockItem title="Valor aplicado" data={"R$ " + dataSnapShot.valueApplied} />
          <HomeDataBlockItem title="Resultado" data={"R$ " + dataSnapShot.equityProfit} />
          <HomeDataBlockItem title="Rentabilidade" data={dataSnapShot.percentageProfit + "%"} />
          <HomeDataBlockItem title="CDI" data={dataSnapShot.indexerValue + "%"} />
          <HomeDataBlockItem title="% Sobre CDI" data={dataSnapShot.percentageOverIndexer + "%"} />
        </section>
        <div className="home-data-chart">
          <img src={chart} alt="" />
        </div>
        <section className="home-data-profits">
          <HomeDataProfit title={"Minhas Rendas Fixas"} data={dataprofit} />
        </section>
      </div>
    </main>
  );
};

export default Home;
