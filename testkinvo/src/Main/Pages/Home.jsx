import React from "react";

import "./Home.scss";

const Home = ({ data }) => {
  return (
    <main>
      <div className="home-content">
        <div className="home-title">
          <h1 style={{ width: "100%" }}>Renta Fixa</h1>
        </div>
        <div className="home-data-block">
          <h2></h2>
          <p>{data ? 'foi' : 'nao foi'}</p>
        </div>
      </div>
    </main>
  );
};

export default Home;
