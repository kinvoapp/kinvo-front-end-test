import React from "react";
import "./HomeDataBlockItem.scss";

const HomeDataBlockItem = ({ title, data }) => {
  return (
    <div className="home-data-block-item">
      <h2>{title}</h2>
      <p>{data}</p>
    </div>
  );
};

export default HomeDataBlockItem;
