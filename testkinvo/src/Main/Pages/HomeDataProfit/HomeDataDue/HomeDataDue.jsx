import React from "react";

const HomeDataDue = ({ due }) => {
  return (
    <div className="home-data-due">
      <div className="home-data-due-title">
        <h3>Vencimento</h3>
      </div>
      <div className="home-data-due-item">
        <div className="home-data-due-item-data">
          <h4>Data Venc.</h4>
          <p>{due.date}</p>
        </div>
        <div className="home-data-due-item-data">
          <h4>Dias Até venc.</h4>
          <p>{due.daysUntilExpiration}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDataDue;
